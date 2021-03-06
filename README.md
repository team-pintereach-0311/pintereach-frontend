# Pintereach
___

### Steven's notes
#### Don't **Fork** the Repo
##### Git Instructions

- Every frontend/UI developer will be working in this repo, but on separate branches.

- After git cloning THIS repo:
   - `git checkout master` <---- Puts you on master branch.

   - You may need to `git pull` before creating a new branch. <--- Git pull fetches and downloads from the branch you are in and merges it with local repo
   
  - `git branch [firstname-lastname]` <-----  Creates the branch with your first and last name as branch name. 
     
  - `git checkout [firstname-lastname]` <---- Switches your working directory into your newly created branch.
  
  - `git push -u origin [firstname-lastname]` <-- Pushes that branch to GitHub.
      - Subsequent pushes after the above push can be done with `git push [firstname-lastname]`.
   
   - You can then `git commit` into that branch with all your changes.

   - **Once you have a fully functional feature:**
      -  `git pull origin master` <---- Merges your branch to the master repo.
      -  We will help resolve merge conflicts if they come up.


##### Initial Instructions

- You still need to run `yarn install` to get your node_modules.

- Netlify deployed site: [my-netlify-site].

- Reach out if you need help.

# Reference Links

- [policies and procedures](https://www.notion.so/Policies-and-Procedures-19e679fc1a284b668d8132dd8d7228cd)
- [Build week Schedule and Daily Milestones](https://www.notion.so/Build-week-Schedule-and-Daily-Milestones-7f0aca2ad598459fa4492fdac9881d5b)

# MVP Breakdown
Styling is pretty much up to you

Frontend react dev
- Create a login page
- Create a register page
- Create a homepage that allows users to see other users boards
- Add functionality to create boards and post article cover pages (or titles, or links) to them.

UI dev
- Create a landing page(can use info from the proposal part of the tdd)
- Create a login/register button on the landing page

