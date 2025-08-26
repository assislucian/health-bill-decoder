# Health Bill Decoder

A modern web application built with Next.js that helps users decode and understand complex health bills and medical expenses. The application provides an intuitive interface for uploading, parsing, and analyzing healthcare billing documents.

## 🚀 Features

- **File Upload & Processing**: Drag-and-drop interface for uploading PDF and image files
- **Smart Parsing**: AI-powered extraction of key information from health bills
- **Dashboard Analytics**: Comprehensive overview of billing data and expenses
- **User Management**: Account creation and management system
- **Responsive Design**: Modern, mobile-friendly interface built with Tailwind CSS
- **Real-time Processing**: Instant feedback and status updates during file processing

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **File Handling**: React Dropzone for file uploads
- **State Management**: React Hooks and Context API
- **Build Tool**: Next.js with SWC compiler
- **Package Manager**: Yarn

## 📋 Prerequisites

- Node.js 18.0 or higher
- Yarn package manager
- Git for version control

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/assislucian/health-bill-decoder.git
   cd health-bill-decoder
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
health-bill-decoder/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── account/           # User account management
│   │   ├── api/               # API routes
│   │   │   ├── parse/         # Bill parsing endpoint
│   │   │   └── uploads/       # File upload management
│   │   ├── dashboard/         # Main dashboard
│   │   ├── upload/            # File upload interface
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable UI components
│   │   ├── ui/                # Base UI components
│   │   ├── file-drop.tsx      # File upload component
│   │   ├── header.tsx         # Navigation header
│   │   ├── hero.tsx           # Landing page hero
│   │   └── results-panel.tsx  # Results display
│   └── styles/                # Global styles
├── public/                    # Static assets
├── .gitignore                 # Git ignore rules
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
# Example:
# DATABASE_URL=your_database_url
# API_KEY=your_api_key
```

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.ts`.

## 📖 Usage

### 1. Homepage
- Visit the landing page to learn about the application
- Navigate to different sections using the header navigation

### 2. File Upload
- Go to the `/upload` page
- Drag and drop your health bill files (PDF, images)
- Wait for processing and analysis

### 3. Dashboard
- View your uploaded bills and analysis results
- Track expenses and billing patterns
- Manage your account settings

### 4. Account Management
- Create and manage your user account
- View billing history and preferences

## 🚀 Development

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript type checking

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement responsive design principles
- Follow Next.js 14 App Router conventions

## 🔒 Security

- Input validation on all file uploads
- Secure API endpoints
- User authentication and authorization
- File type restrictions and size limits

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- File handling with [React Dropzone](https://react-dropzone.js.org/)

## 📞 Support

If you have any questions or need support, please:

1. Check the [Issues](https://github.com/assislucian/health-bill-decoder/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🔄 Version History

- **v1.0.0** - Initial release with core functionality
  - File upload and processing
  - Basic dashboard
  - User account management

---

**Health Bill Decoder** - Making healthcare billing transparent and understandable for everyone.
