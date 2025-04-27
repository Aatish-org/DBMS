// Dark Mode Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get the dark mode toggle checkbox
  const darkModeToggle = document.querySelector('#darkModeToggle') || document.querySelector('.toggle-checkbox');

  // Check if dark mode is enabled in localStorage
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

  // Initialize the toggle checkbox based on the current dark mode setting
  if (darkModeToggle) {
    darkModeToggle.checked = isDarkMode;
  }

  // Function to enable dark mode
  function enableDarkMode() {
    // Add dark mode classes to elements
    document.documentElement.classList.add('dark-mode');
    document.body.classList.remove('bg-gray-100');
    document.body.classList.add('bg-gray-900');

    // Switch to dark mode icons
    const icons = document.querySelectorAll('img[src$="-icon.png"]');
    icons.forEach(icon => {
      const src = icon.getAttribute('src');
      if (!src.includes('darkmode/')) {
        const iconName = src.split('/').pop();
        // Check if dark mode version exists before switching
        if (['dashboard-icon.png', 'products-icon.png', 'cart-icon.png', 'orders-icon.png', 'reports-icon.png', 'settings-icon.png'].includes(iconName)) {
          icon.setAttribute('src', 'darkmode/' + iconName);
        }
      }
    });

    // Update top navigation bar if it exists
    const header = document.querySelector('header');
    if (header) {
      header.classList.remove('bg-white');
      header.classList.add('bg-gray-800');

      // Update text in header
      const headerText = header.querySelectorAll('span:not(.bg-gray-200), h1');
      headerText.forEach(text => {
        text.classList.remove('text-gray-800', 'text-gray-700');
        text.classList.add('text-gray-200');
      });

      // Update links in header
      const allHeaderLinks = header.querySelectorAll('a');
      allHeaderLinks.forEach(link => {
        // Skip links that contain menu items (spans with bg-gray-200 class)
        if (!link.querySelector('.bg-gray-200')) {
          link.classList.remove('text-gray-700', 'hover:text-blue-600');
          link.classList.add('text-gray-300', 'hover:text-blue-400');
        }
      });
    }

    // Update headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
      heading.classList.remove('text-gray-800');
      heading.classList.add('text-white');
    });

    // Update all text elements with dark colors
    const darkTextElements = document.querySelectorAll('.text-gray-700, .text-gray-800, .text-gray-900');
    darkTextElements.forEach(element => {
      // Skip menu items and their parent elements
      if (element.querySelector('.bg-gray-200') || element.closest('a')?.querySelector('.bg-gray-200')) {
        return;
      }

      if (element.classList.contains('text-gray-700')) {
        element.classList.remove('text-gray-700');
        element.classList.add('text-white');
      }
      if (element.classList.contains('text-gray-800')) {
        element.classList.remove('text-gray-800');
        element.classList.add('text-white');
      }
      if (element.classList.contains('text-gray-900')) {
        element.classList.remove('text-gray-900');
        element.classList.add('text-white');
      }
    });

    // Update sections/cards
    const sections = document.querySelectorAll('section, .bg-white');
    sections.forEach(section => {
      section.classList.remove('bg-white');
      section.classList.add('bg-gray-800');
    });

    // Update menu cards (for dashboard)
    const menuCards = document.querySelectorAll('a.bg-white');
    menuCards.forEach(card => {
      card.classList.remove('bg-white', 'hover:bg-gray-100');
      card.classList.add('bg-gray-800', 'hover:bg-gray-700');
    });

    // Update header (for dashboard)
    const dashboardHeader = document.querySelector('header.bg-blue-900');
    if (dashboardHeader) {
      dashboardHeader.classList.remove('bg-blue-900');
      dashboardHeader.classList.add('bg-gray-900');
    }

    // Update footer (for dashboard)
    const dashboardFooter = document.querySelector('footer.bg-gray-800');
    if (dashboardFooter) {
      dashboardFooter.classList.remove('bg-gray-800');
      dashboardFooter.classList.add('bg-gray-900');
    }

    // Update table headers
    const tableHeaders = document.querySelectorAll('thead');
    tableHeaders.forEach(header => {
      header.classList.remove('bg-gray-100');
      header.classList.add('bg-gray-700');
    });

    // Update table header text
    const thText = document.querySelectorAll('th');
    thText.forEach(th => {
      th.classList.remove('text-gray-600');
      th.classList.add('text-gray-200');
    });

    // Update table body text
    const tdText = document.querySelectorAll('td');
    tdText.forEach(td => {
      if (td.classList.contains('text-gray-700')) {
        td.classList.remove('text-gray-700');
        td.classList.add('text-white');
      }
    });

    // Update form labels
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
      if (label.classList.contains('text-gray-600')) {
        label.classList.remove('text-gray-600');
        label.classList.add('text-white');
      }
      if (label.classList.contains('text-gray-700')) {
        label.classList.remove('text-gray-700');
        label.classList.add('text-white');
      }
    });

    // Update modal headings and text
    const modalHeadings = document.querySelectorAll('.bg-white h3, .bg-gray-800 h3');
    modalHeadings.forEach(heading => {
      if (heading.classList.contains('text-gray-800')) {
        heading.classList.remove('text-gray-800');
        heading.classList.add('text-white');
      }
    });

    // Update close buttons
    const closeButtons = document.querySelectorAll('button.text-gray-500, button.text-gray-700');
    closeButtons.forEach(button => {
      if (button.classList.contains('text-gray-500')) {
        button.classList.remove('text-gray-500', 'hover:text-gray-700');
        button.classList.add('text-gray-300', 'hover:text-white');
      }
    });

    // Update cancel buttons
    const grayButtons = document.querySelectorAll('button.bg-gray-300, button.bg-gray-400');
    grayButtons.forEach(button => {
      if (button.classList.contains('text-gray-800')) {
        button.classList.remove('text-gray-800');
        button.classList.add('text-white');
      }
    });

    // Update form inputs
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], select');
    inputs.forEach(input => {
      input.classList.remove('border-gray-300');
      input.classList.add('border-gray-600', 'bg-gray-700', 'text-white');
    });

    // Save preference to localStorage
    localStorage.setItem('darkMode', 'enabled');

    // Update checkbox state
    if (darkModeToggle) {
      darkModeToggle.checked = true;
    }
  }

  // Function to disable dark mode
  function disableDarkMode() {
    // Remove dark mode classes from elements
    document.documentElement.classList.remove('dark-mode');
    document.body.classList.remove('bg-gray-900');
    document.body.classList.add('bg-gray-100');

    // Switch back to regular icons
    const icons = document.querySelectorAll('img[src^="darkmode/"]');
    icons.forEach(icon => {
      const src = icon.getAttribute('src');
      const iconName = src.replace('darkmode/', '');
      icon.setAttribute('src', iconName);
    });

    // Update top navigation bar if it exists
    const header = document.querySelector('header');
    if (header) {
      header.classList.remove('bg-gray-800');
      header.classList.add('bg-white');

      // Update text in header
      const headerText = header.querySelectorAll('span:not(.bg-gray-200), h1');
      headerText.forEach(text => {
        text.classList.remove('text-gray-200');
        text.classList.add('text-gray-800');
      });

      // Update links in header
      const allHeaderLinks = header.querySelectorAll('a');
      allHeaderLinks.forEach(link => {
        // Skip links that contain menu items (spans with bg-gray-200 class)
        if (!link.querySelector('.bg-gray-200')) {
          link.classList.remove('text-gray-300', 'hover:text-blue-400');
          link.classList.add('text-gray-700', 'hover:text-blue-600');
        }
      });
    }

    // Update headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
      heading.classList.remove('text-white');
      heading.classList.add('text-gray-800');
    });

    // Revert all text elements that were changed to white
    const whiteTextElements = document.querySelectorAll('.text-white');
    whiteTextElements.forEach(element => {
      // Skip elements that should remain white (like buttons with white text)
      if (element.tagName === 'BUTTON' && 
          (element.classList.contains('bg-blue-600') || 
           element.classList.contains('bg-red-600'))) {
        return;
      }

      // Skip headings as they're handled separately
      if (element.tagName === 'H1' || element.tagName === 'H2' || 
          element.tagName === 'H3' || element.tagName === 'H4' || 
          element.tagName === 'H5' || element.tagName === 'H6') {
        return;
      }

      element.classList.remove('text-white');

      // Determine which gray color to apply based on context
      if (element.tagName === 'LABEL' && element.classList.contains('font-bold')) {
        element.classList.add('text-gray-700');
      } else if (element.tagName === 'TD') {
        element.classList.add('text-gray-700');
      } else if (element.classList.contains('font-semibold') || 
                element.classList.contains('font-bold')) {
        element.classList.add('text-gray-800');
      } else {
        element.classList.add('text-gray-700');
      }
    });

    // Update sections/cards
    const sections = document.querySelectorAll('section, .bg-gray-800');
    sections.forEach(section => {
      section.classList.remove('bg-gray-800');
      section.classList.add('bg-white');
    });

    // Update menu cards (for dashboard)
    const menuCards = document.querySelectorAll('a.bg-gray-800');
    menuCards.forEach(card => {
      card.classList.remove('bg-gray-800', 'hover:bg-gray-700');
      card.classList.add('bg-white', 'hover:bg-gray-100');
    });

    // Update header (for dashboard)
    const dashboardHeader = document.querySelector('header.bg-gray-900');
    if (dashboardHeader) {
      dashboardHeader.classList.remove('bg-gray-900');
      dashboardHeader.classList.add('bg-blue-900');
    }

    // Update footer (for dashboard)
    const dashboardFooter = document.querySelector('footer.bg-gray-900');
    if (dashboardFooter) {
      dashboardFooter.classList.remove('bg-gray-900');
      dashboardFooter.classList.add('bg-gray-800');
    }

    // Update table headers
    const tableHeaders = document.querySelectorAll('thead');
    tableHeaders.forEach(header => {
      header.classList.remove('bg-gray-700');
      header.classList.add('bg-gray-100');
    });

    // Update table header text
    const thText = document.querySelectorAll('th');
    thText.forEach(th => {
      th.classList.remove('text-gray-200');
      th.classList.add('text-gray-600');
    });

    // Update table body text
    const tdText = document.querySelectorAll('td');
    tdText.forEach(td => {
      if (td.classList.contains('text-white') || td.classList.contains('text-gray-300')) {
        td.classList.remove('text-white', 'text-gray-300');
        td.classList.add('text-gray-700');
      }
    });

    // Update form labels
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
      if (label.classList.contains('text-white')) {
        label.classList.remove('text-white');
        if (label.classList.contains('font-bold')) {
          label.classList.add('text-gray-700');
        } else {
          label.classList.add('text-gray-600');
        }
      }
    });

    // Update modal headings and text
    const modalHeadings = document.querySelectorAll('.bg-white h3, .bg-gray-800 h3');
    modalHeadings.forEach(heading => {
      if (heading.classList.contains('text-white')) {
        heading.classList.remove('text-white');
        heading.classList.add('text-gray-800');
      }
    });

    // Update close buttons
    const closeButtons = document.querySelectorAll('button.text-gray-300, button.hover\\:text-white');
    closeButtons.forEach(button => {
      if (button.classList.contains('text-gray-300')) {
        button.classList.remove('text-gray-300', 'hover:text-white');
        button.classList.add('text-gray-500', 'hover:text-gray-700');
      }
    });

    // Update cancel buttons
    const grayButtons = document.querySelectorAll('button.bg-gray-300, button.bg-gray-400');
    grayButtons.forEach(button => {
      if (button.classList.contains('text-white')) {
        button.classList.remove('text-white');
        button.classList.add('text-gray-800');
      }
    });

    // Update form inputs
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], select');
    inputs.forEach(input => {
      input.classList.remove('border-gray-600', 'bg-gray-700', 'text-white');
      input.classList.add('border-gray-300');
    });

    // Save preference to localStorage
    localStorage.setItem('darkMode', 'disabled');

    // Update checkbox state
    if (darkModeToggle) {
      darkModeToggle.checked = false;
    }
  }

  // Apply dark mode if it's enabled in localStorage
  if (isDarkMode) {
    enableDarkMode();
  }

  // Toggle dark mode when the checkbox is clicked
  if (darkModeToggle) {
    darkModeToggle.addEventListener('change', function() {
      if (this.checked) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
  }
});
