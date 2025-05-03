# HAR Reader

A modern, interactive HTTP Archive (HAR) file viewer built with React. This tool allows you to easily analyze and explore web performance data captured in HAR format.

## Features

- **Simple File Upload**: Drag and drop or select HAR files to analyze
- **Interactive Table**: View all HTTP requests with key information at a glance
- **Sortable Columns**: Sort by time, size, and other metrics to identify performance bottlenecks
- **Detailed Request View**: Click on any row to see comprehensive details about the request and response
- **Clean UI**: Built with a modern, responsive design using Tailwind CSS and DaisyUI

## What is a HAR File?

HAR (HTTP Archive) is a file format used by web browsers to export detailed performance data about web pages. It contains information about each HTTP request including:

- Request and response headers
- Timing data
- Size information
- Status codes
- Content types
- And more

HAR files are commonly used for:
- Performance analysis
- Debugging network issues
- Documenting API interactions
- Testing and development

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/har-reader.git
   cd har-reader
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Click the file input or drag and drop a HAR file onto the upload area
2. Once uploaded, the file will be parsed and displayed in a table format
3. Click on any row to see detailed information about that specific request
4. Use the column headers to sort the data by different metrics

## Project Structure

```
harreader/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.jsx         # Main component with file upload functionality
│   │   ├── TableComponent.jsx # Table display with expandable rows
│   ├── services/
│   │   ├── utils.js         # Utility functions for formatting and sorting
│   ├── App.jsx
│   ├── main.jsx
├── package.json
└── README.md
```

## Technologies Used

- **React**: Frontend library for building the user interface
- **Tailwind CSS**: Utility-first CSS framework for styling
- **DaisyUI**: Component library for Tailwind CSS
- **Vite**: Next generation frontend tooling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [HAR Specification](http://www.softwareishard.com/blog/har-12-spec/) for providing the standard format
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)