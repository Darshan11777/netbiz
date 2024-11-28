$(document).ready(function () {
    // Configuration
    const itemsPerPage = 6; // 6 elements per page
    let currentPage = 1;
  
    // Function to show the elements based on the current page
    function showElements() {
      const elements = $(".element");
      const container = $(".elements-container"); // Add a class to your parent container
      const totalPages = Math.ceil(elements.length / itemsPerPage);
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
  
      // Calculate and set the fixed height for the container
      const maxHeight = Math.max(...elements.map((_, el) => $(el).outerHeight(true)).get());
      container.height(maxHeight * itemsPerPage);
  
      // Hide all elements without animation
      elements.hide();
  
      // Show elements for the current page with a fade-in effect
      elements.slice(start, end).show().addClass("show");
      // elements.slice(start, end).fadeIn().addClass("show");
  
      // Update pagination buttons
      updatePagination(totalPages);
    }
  
    // Function to update the pagination buttons
    function updatePagination(totalPages) {
      const paginationDiv = $("#pagination");
      paginationDiv.empty(); // Clear existing pagination buttons
  
      // Create Prev button with SVG
      const prevButton = $("<button>")
        .html(
          `<span class="pagination-change"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> Prev</span>`
        )
        .addClass(`pagination-btn ${currentPage === 1 ? "disabled" : "pagination-btn-hover"}`)
        .on("click", function () {
          if (currentPage > 1) {
            currentPage--;
            showElements();
          }
        });
      paginationDiv.append(prevButton);
  
      // Create page buttons
      for (let i = 1; i <= totalPages; i++) {
        const pageButton = $("<button>")
          .text(i)
          .addClass(`pagination-btn ${i === currentPage ? "active" : ""}`)
          .on("click", function () {
            currentPage = i;
            showElements();
          });
        paginationDiv.append(pageButton);
      }
  
      // Create Next button with SVG
      const nextButton = $("<button>")
        .html(
          `<span class="pagination-change"> Next <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg></span>`
        )
        .addClass(
          `pagination-btn ${currentPage === totalPages ? "disabled" : "pagination-btn-hover"}`
        )
        .on("click", function () {
          if (currentPage < totalPages) {
            currentPage++;
            showElements();
          }
        });
      paginationDiv.append(nextButton);
    }
  
    // Initialize the pagination
    showElements();
  });
  