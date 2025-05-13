# CI_CD-Pipeline
A test of GitHub Actions that will run test cases when a Pull Request is made to the develop branch and when the code is merged to main and automatically deploys to Render.

## Features
- **Automated Testing**: Runs test suite on Pull Requests to the develop branch
- **Continuous Integration**: Ensures code quality before merging
- **Continuous Deployment**: Automatically deploys to Render when code is merged to main
- **Branch Protection**: Maintains code quality by requiring tests to pass before merging

## Visuals
![Alt text](<Screenshot 2025-05-12 at 7.44.05 PM.png>)
![Alt text](<Screenshot 2025-05-12 at 7.44.20 PM.png>)

## Deployed info
https://github.com/MMullen4/CI_CD-Pipeline

https://ci-cd-pipeline-eqem.onrender.com/

## Workflow Overview

### Pull Request Workflow
When a Pull Request is opened against the develop branch:
1. GitHub Actions runs the test suite
2. Test results are reported on the PR
3. PR can only be merged if tests pass

### Deployment Workflow
When code is merged to the main branch:
1. GitHub Actions triggers the deployment pipeline
2. Application is automatically deployed to Render
3. Deployment status is reported

## Setup Instructions

### Prerequisites
- GitHub account
- Render account
- Application code with test suite

### Configuration
1. **GitHub Repository Setup**
   - Enable GitHub Actions in your repository settings
   - Set up branch protection rules for develop and main branches

2. **Render Setup**
   - Create a new service on Render
   - Connect your GitHub repository
   - Configure environment variables

3. **Secrets Configuration**
   - Add the following secrets to your GitHub repository:
     - `RENDER_API_KEY`: Your Render API key
     - Any other environment-specific secrets

## Usage

### Development Workflow
1. Create a feature branch from develop
   ```bash
   git checkout develop
   git pull
   git checkout -b feature/your-feature-name
   git add .
   git commit -m "Description of changes"
   git push -u origin feature/your-feature-name

## Contributing
   Developed with the assistance of FSF tutors, TA's and teachers.  
   
   If you're interested -
   Fork the repository
   Create your feature branch (git checkout -b feature/amazing-feature)
   Commit your changes (git commit -m 'Add some amazing feature')
   Push to the branch (git push origin feature/amazing-feature)
   Open a Pull Request

## License
  This project is licensed under the MIT License - see the LICENSE file for details.
 
## Contact
My info -
email - mhmullen4@outlook.com
github - https://github.com/MMullen4






  
