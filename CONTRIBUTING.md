Naira App - Contribution Guide
Welcome to the RunNaira app project! To maintain quality and smooth collaboration, please follow these guidelines for your contributions.

Branching Strategy
main branch: Production-ready, stable code. Only admins can merge here.
dev branch: Active development branch. All feature branches merge here first.
feature/* branches: Individual features or bug fixes created by engineers.
How to Contribute
1. Clone the repository
git clone git@github.com:/runnaira-app.git cd runnaira-app

Checkout the dev branch git checkout dev

Create a feature branch Create a new branch for your work:

git checkout -b feature/your-feature-name

Make changes and commit
git add . git commit -m "Add a clear, concise commit message"

Push your branch to GitHub
git push origin feature/your-feature-name

Create a Pull Request (PR) to dev Using GitHub CLI:
gh pr create --base dev --head feature/your-feature-name --title "Your PR title" --body "Describe your changes here"

Or via GitHub website:

Go to your repository
Click Pull requests
Click New pull request
Set base to dev, compare to your feature branch
Create the PR
Wait for review and approval An admin will review your PR, request changes if necessary, and merge it into dev after approval.
Merging dev into main Only admins merge dev into main after thorough testing and validation.

Notes

Do not push directly to main or dev.
Always work in feature branches and use PRs.
Follow commit message best practices.
Keep your branches up to date by regularly pulling changes from dev.
