# Contributing to Health Bill Decoder

Thank you for your interest in contributing to the Health Bill Decoder project! This document provides guidelines and information for contributors.

## 🎯 How Can I Contribute?

### Reporting Bugs
- Use the GitHub issue tracker
- Include detailed steps to reproduce the bug
- Provide system information and error logs
- Include screenshots if applicable

### Suggesting Enhancements
- Open a feature request issue
- Describe the enhancement and its benefits
- Provide mockups or examples if possible
- Discuss implementation approaches

### Code Contributions
- Fork the repository
- Create a feature branch
- Implement your changes
- Write tests if applicable
- Submit a pull request

## 🚀 Development Setup

### Prerequisites
- Node.js 18.0+
- Yarn package manager
- Git
- Code editor (VS Code recommended)

### Local Development
1. Fork and clone the repository
2. Install dependencies: `yarn install`
3. Start development server: `yarn dev`
4. Make your changes
5. Test thoroughly
6. Submit a pull request

## 📝 Code Style Guidelines

### TypeScript
- Use strict TypeScript configuration
- Define proper types for all functions and variables
- Avoid `any` type when possible
- Use interfaces for object shapes

### React Components
- Use functional components with hooks
- Follow naming conventions (PascalCase for components)
- Implement proper prop types
- Use TypeScript for component props

### CSS/Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography
- Use CSS variables for theme values

### File Organization
- Keep components in appropriate directories
- Use index files for clean imports
- Group related functionality together
- Follow Next.js App Router conventions

## 🧪 Testing

### Unit Tests
- Write tests for utility functions
- Test component rendering and interactions
- Use React Testing Library for component tests
- Maintain good test coverage

### Integration Tests
- Test API endpoints
- Test user workflows
- Test file upload and processing
- Test responsive design on different screen sizes

## 📋 Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, documented code
   - Follow existing patterns
   - Add tests if applicable

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a pull request**
   - Provide clear description of changes
   - Link related issues
   - Request reviews from maintainers

### Commit Message Format
Use conventional commit format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

## 🔍 Code Review Process

- All code must be reviewed before merging
- Address review comments promptly
- Maintainers will review for:
  - Code quality and style
  - Functionality and edge cases
  - Security considerations
  - Performance implications

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment Information**
   - Operating system and version
   - Browser and version
   - Node.js version

2. **Steps to Reproduce**
   - Clear, numbered steps
   - Expected vs actual behavior
   - Screenshots or screen recordings

3. **Error Information**
   - Console errors
   - Network request failures
   - Stack traces

## 💡 Feature Requests

When suggesting features:

1. **Describe the Problem**
   - What issue does this solve?
   - Who benefits from this feature?

2. **Propose a Solution**
   - How should it work?
   - Any specific requirements?

3. **Consider Implementation**
   - Technical feasibility
   - Impact on existing code
   - Maintenance considerations

## 📚 Documentation

- Update README.md for user-facing changes
- Document new API endpoints
- Update component documentation
- Add inline code comments for complex logic

## 🚨 Security

- Report security vulnerabilities privately
- Don't include sensitive information in issues
- Follow secure coding practices
- Validate all user inputs

## 🤝 Community Guidelines

- Be respectful and inclusive
- Help other contributors
- Share knowledge and best practices
- Provide constructive feedback

## 📞 Getting Help

- Check existing documentation
- Search existing issues
- Join community discussions
- Contact maintainers for urgent issues

## 🎉 Recognition

Contributors will be recognized in:
- Project README
- Release notes
- Contributor hall of fame
- GitHub contributors list

Thank you for contributing to making healthcare billing more transparent and understandable!
