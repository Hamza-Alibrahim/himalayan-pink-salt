"use client";
import { useState } from "react";

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DashTableProps {
  title: string;
  columns: Column[];
  data: any[];
  searchable?: boolean;
  pagination?: boolean;
  itemsPerPage?: number;
  onRowClick?: (row: any) => void;
  actions?: (row: any) => React.ReactNode;
  onAdd?: () => void;
  addButtonText?: string;
}

const DashTable = ({
  title,
  columns,
  data,
  searchable = true,
  pagination = true,
  itemsPerPage = 10,
  onRowClick,
  actions,
  onAdd,
  addButtonText = "Add New",
}: DashTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter((row) =>
    columns.some((column) =>
      String(row[column.key]).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = pagination
    ? sortedData.slice(startIndex, startIndex + itemsPerPage)
    : sortedData;

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const renderCellContent = (column: Column, value: any, row: any) => {
    if (column.render) {
      return column.render(value, row);
    }
    return value;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-border-light">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-border-light">
        <div className="flex flex-col gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-serif text-text-dark mb-1">
              {title}
            </h2>
            <p className="text-text-light text-xs sm:text-sm">
              {data.length} total {data.length === 1 ? "item" : "items"}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {searchable && (
              <div className="relative flex-grow max-w-sm">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full px-3 sm:px-4 py-2 pl-9 sm:pl-10 border border-border-light rounded-lg focus:outline-none focus:border-terracotta bg-off-white text-sm sm:text-base"
                />
                <svg
                  className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            )}

            {/* Add Button */}
            {onAdd && (
              <button
                onClick={onAdd}
                className="cursor-pointer bg-terracotta hover:bg-terracotta-dark text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap text-sm sm:text-base"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="hidden xs:inline">{addButtonText}</span>
                <span className="xs:hidden">Add</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Table Container with Horizontal Scroll */}
      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          {/* Mobile Card View */}
          <div className="sm:hidden">
            {paginatedData.length > 0 ? (
              <div className="divide-y divide-border-light">
                {paginatedData.map((row, index) => (
                  <div
                    key={index}
                    className={`
                      p-4
                      ${
                        onRowClick
                          ? "cursor-pointer hover:bg-pink-light transition-colors"
                          : ""
                      }
                    `}
                    onClick={() => onRowClick && onRowClick(row)}
                  >
                    <div className="space-y-3">
                      {columns.map((column) => (
                        <div
                          key={column.key}
                          className="flex justify-between items-start"
                        >
                          <span className="text-xs font-semibold text-text-dark capitalize min-w-[80px]">
                            {column.label}:
                          </span>
                          <div className="text-right flex-1 ml-2">
                            <span className="text-xs text-text-medium">
                              {renderCellContent(column, row[column.key], row)}
                            </span>
                          </div>
                        </div>
                      ))}
                      {actions && (
                        <div className="flex justify-between items-center pt-2 border-t border-border-light">
                          <span className="text-xs font-semibold text-text-dark">
                            Actions:
                          </span>
                          <div className="flex items-center gap-1">
                            {actions(row)}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-4 py-8 text-center">
                <div className="flex flex-col items-center justify-center text-text-light">
                  <svg
                    className="w-10 h-10 sm:w-12 sm:h-12 mb-2 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4"
                    />
                  </svg>
                  <p className="text-base sm:text-lg font-medium mb-1">
                    No data found
                  </p>
                  <p className="text-xs sm:text-sm">
                    Try adjusting your search or filters
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Table View */}
          <table className="min-w-full hidden sm:table">
            <thead>
              <tr className="bg-pink-light border-b border-border-light">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={`
                      px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-text-dark 
                      whitespace-nowrap min-w-[100px] sm:min-w-[120px]
                      ${
                        column.sortable
                          ? "cursor-pointer hover:bg-pink-medium transition-colors"
                          : ""
                      }
                    `}
                    onClick={() => column.sortable && handleSort(column.key)}
                  >
                    <div className="flex items-center justify-center gap-1 sm:gap-2">
                      <span className="text-center">{column.label}</span>
                      {column.sortable && (
                        <div className="flex flex-col flex-shrink-0">
                          <svg
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${
                              sortConfig?.key === column.key &&
                              sortConfig.direction === "asc"
                                ? "text-terracotta"
                                : "text-text-medium"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <svg
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 -mt-0.5 sm:-mt-1 ${
                              sortConfig?.key === column.key &&
                              sortConfig.direction === "desc"
                                ? "text-terracotta"
                                : "text-text-medium"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </th>
                ))}
                {actions && (
                  <th className="px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-text-dark whitespace-nowrap min-w-[100px] sm:min-w-[140px]">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row, index) => (
                  <tr
                    key={index}
                    className={`
                      border-b border-border-light last:border-b-0
                      ${
                        onRowClick
                          ? "cursor-pointer hover:bg-pink-light transition-colors"
                          : ""
                      }
                    `}
                    onClick={() => onRowClick && onRowClick(row)}
                  >
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className="px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm text-text-medium whitespace-nowrap"
                      >
                        <div className="flex items-center justify-center min-h-[20px] sm:min-h-[24px]">
                          {renderCellContent(column, row[column.key], row)}
                        </div>
                      </td>
                    ))}
                    {actions && (
                      <td className="px-3 sm:px-4 py-3 sm:py-4 whitespace-nowrap">
                        <div className="flex items-center justify-center gap-1 sm:gap-2">
                          {actions(row)}
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length + (actions ? 1 : 0)}
                    className="px-4 sm:px-6 py-8 sm:py-12 text-center"
                  >
                    <div className="flex flex-col items-center justify-center text-text-light">
                      <svg
                        className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4"
                        />
                      </svg>
                      <p className="text-base sm:text-lg font-medium mb-1">
                        No data found
                      </p>
                      <p className="text-xs sm:text-sm">
                        Try adjusting your search or filters
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer - Pagination */}
      {pagination && totalPages > 1 && (
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 bg-off-white rounded-b-xl">
          <div className="text-xs sm:text-sm text-text-medium">
            Showing{" "}
            <span className="font-semibold text-text-dark">
              {startIndex + 1}-
              {Math.min(startIndex + itemsPerPage, sortedData.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-text-dark">
              {sortedData.length}
            </span>{" "}
            items
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-1.5 sm:p-2 rounded-lg border border-border-light hover:bg-pink-light hover:border-pink-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-medium"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex items-center gap-0.5 sm:gap-1 mx-1 sm:mx-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      currentPage === pageNum
                        ? "bg-terracotta text-white"
                        : "text-text-medium hover:bg-pink-light"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-1.5 sm:p-2 rounded-lg border border-border-light hover:bg-pink-light hover:border-pink-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-medium"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashTable;
