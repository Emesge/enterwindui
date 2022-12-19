export const toTitleCase = (str = '') => {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
};

export function transformComponentHtml(
  componentHtml,
  componentContainer = 'relative',
  theme = 'light'
) {
  return `
  <html class="${theme}">
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        let links = [...document.querySelectorAll('a')]
        let forms = [...document.querySelectorAll('form')]
        links.forEach(link => link.addEventListener('click', (e) => e.preventDefault()))
        forms.forEach(form => form.addEventListener('submit', (e) => e.preventDefault()))
      })
    </script>
    <link rel="stylesheet" href="/tailwind.css">
    <body class="${componentContainer}">
      ${componentHtml}
    </body>
    </html>
  `;
}
