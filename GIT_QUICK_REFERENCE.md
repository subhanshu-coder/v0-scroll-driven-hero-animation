# 📚 Git Quick Reference - ITZFIZZ

A quick reference guide for common Git commands used in this project.

## 🚀 Initial Setup (First Time Only)

```bash
# Clone repository (if you have one online)
git clone https://github.com/yourusername/itzfizz.git
cd itzfizz

# OR initialize a new repository locally
git init
git remote add origin https://github.com/yourusername/itzfizz.git
```

## 📝 Basic Workflow

### 1. Check Status
```bash
# See what files have changed
git status

# See detailed changes
git diff
```

### 2. Stage Changes
```bash
# Stage all changes
git add .

# Stage specific file
git add path/to/file.txt

# Stage all changes except specific file
git add . && git reset path/to/ignore.txt
```

### 3. Commit Changes
```bash
# Commit with message
git commit -m "Add new feature"

# Commit with detailed message
git commit -m "Add scroll animation
- Implement GSAP ScrollTrigger
- Add smooth car animation
- Fix responsive issues"

# Skip staging (stage + commit in one)
git commit -am "Update styles"
```

### 4. Push to GitHub
```bash
# Push to main branch
git push origin main

# Push and set upstream (first time)
git push -u origin main

# Push all branches
git push --all

# Push specific branch
git push origin feature/branch-name
```

### 5. Pull from GitHub
```bash
# Get latest changes
git pull origin main

# Fetch without merging
git fetch origin

# Merge remote changes
git merge origin/main
```

---

## 🌿 Branch Management

### Create & Switch Branches
```bash
# Create new branch
git branch feature/new-feature

# Create and switch to new branch
git checkout -b feature/new-feature

# Modern syntax (Git 2.23+)
git switch -c feature/new-feature

# List all branches
git branch -a

# List remote branches
git branch -r

# Switch to existing branch
git checkout main

# Delete local branch
git branch -d feature/old-feature

# Force delete branch
git branch -D feature/old-feature

# Delete remote branch
git push origin --delete feature/old-feature
```

### Rename Branch
```bash
# Rename current branch
git branch -m new-name

# Rename specific branch
git branch -m old-name new-name

# Rename and push
git branch -m old-name new-name
git push origin -u new-name
git push origin --delete old-name
```

---

## 📊 View History

### View Commits
```bash
# Short commit log
git log --oneline

# Detailed log
git log

# Last N commits
git log -n 5

# Pretty format
git log --oneline --graph --all --decorate

# Specific author
git log --author="Your Name"

# Since date
git log --since="2 weeks ago"

# Search in commit message
git log --grep="animation"

# View specific file history
git log --oneline path/to/file.txt

# Show commit details
git show <commit-hash>
```

---

## ↩️ Undo Changes

### Before Staging
```bash
# Discard changes in working directory
git checkout -- path/to/file.txt

# Discard all changes
git checkout -- .

# Modern syntax
git restore path/to/file.txt
git restore .
```

### After Staging
```bash
# Unstage file (keep changes)
git reset path/to/file.txt

# Unstage all files
git reset

# Modern syntax
git restore --staged path/to/file.txt
git restore --staged .
```

### After Committing
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Undo last N commits
git reset --hard HEAD~3

# Revert commit (create new commit that undoes it)
git revert <commit-hash>

# Amend last commit message
git commit --amend -m "New message"

# Amend last commit with new changes
git add .
git commit --amend --no-edit
```

---

## 🔀 Merge & Rebase

### Merge Branches
```bash
# Merge feature into current branch
git merge feature/new-feature

# Merge with merge commit
git merge --no-ff feature/new-feature

# Merge and squash commits
git merge --squash feature/new-feature

# Abort merge
git merge --abort
```

### Rebase Branches
```bash
# Rebase current branch on main
git rebase main

# Interactive rebase (squash commits)
git rebase -i HEAD~3

# Continue rebase after resolving conflicts
git rebase --continue

# Abort rebase
git rebase --abort
```

---

## 🔧 Stash (Temporary Save)

```bash
# Save changes temporarily
git stash

# Save with message
git stash save "Work in progress"

# List stashes
git stash list

# Apply stash (keep stash)
git stash apply stash@{0}

# Apply and remove stash
git stash pop

# Drop specific stash
git stash drop stash@{0}

# Drop all stashes
git stash clear
```

---

## 🔍 Check Remote

```bash
# List remotes
git remote -v

# Add new remote
git remote add upstream https://github.com/original/repo.git

# Remove remote
git remote remove origin

# Rename remote
git remote rename origin upstream

# Show remote details
git remote show origin
```

---

## 📤 Pull Requests (GitHub)

### From Command Line
```bash
# Create PR branch
git checkout -b feature/new-feature

# Make changes and push
git add .
git commit -m "Add feature"
git push -u origin feature/new-feature

# Then create PR on GitHub website:
# 1. Go to github.com/yourusername/itzfizz
# 2. Click "Compare & pull request"
# 3. Add title and description
# 4. Click "Create pull request"
```

---

## 🔗 Common Workflows

### Feature Branch Workflow
```bash
# 1. Create feature branch
git checkout -b feature/animation

# 2. Make changes
# ... edit files ...

# 3. Commit changes
git add .
git commit -m "Improve animation smoothness"

# 4. Push to GitHub
git push -u origin feature/animation

# 5. Create Pull Request on GitHub
# 6. Merge PR on GitHub
# 7. Delete branch locally
git checkout main
git branch -d feature/animation
git push origin --delete feature/animation
```

### Keep Fork Updated
```bash
# Add upstream remote
git remote add upstream https://github.com/original/repo.git

# Fetch updates from upstream
git fetch upstream

# Merge upstream main into your main
git checkout main
git merge upstream/main

# Push to your fork
git push origin main
```

### Sync Local with Remote
```bash
# Fetch all changes
git fetch origin

# Show what changed
git log main..origin/main

# Fast-forward merge
git pull origin main

# Keep local changes if conflicts
git pull --no-rebase origin main
```

---

## 🚨 Troubleshooting

### Undo Last Push
```bash
# If not pushed yet
git reset --soft HEAD~1

# If already pushed (create revert commit)
git revert HEAD

# Force push (use with caution!)
git push --force-with-lease origin main
```

### Merge Conflicts
```bash
# See conflicts
git status

# Edit files to resolve conflicts
# Then:
git add .
git commit -m "Resolve merge conflicts"
```

### Lost Commits
```bash
# See all recent actions
git reflog

# Restore to specific point
git reset --hard <hash>
```

---

## 💡 Pro Tips

### Create Alias for Common Commands
```bash
# Add to ~/.bashrc or ~/.zshrc
alias gs='git status'
alias ga='git add .'
alias gc='git commit -m'
alias gp='git push'
alias gl='git log --oneline -5'
alias gd='git diff'
```

### Git Config
```bash
# View config
git config --list

# Set default editor
git config --global core.editor "code"

# Set default branch name
git config --global init.defaultBranch main

# Enable color output
git config --global color.ui true

# Set auto-CRLF for Windows
git config --global core.autocrlf true
```

### Useful One-Liners
```bash
# Show total commits
git rev-list --count HEAD

# Show contributors
git shortlog -sn

# Show files changed in last commit
git show --name-only HEAD

# Show size of repository
du -sh .git

# Clean git history (remove untracked files)
git clean -fd
```

---

## 📞 Get Help

```bash
# General help
git help

# Help for specific command
git help commit
git help push

# Quick help
git commit --help
```

---

**Remember:** Always double-check your commands before running them, especially ones with `--force` or `--hard` flags!

Happy coding! 🎉
