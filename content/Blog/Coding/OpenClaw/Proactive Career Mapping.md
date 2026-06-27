# Agent Routine: Proactive Career Mapping

Trigger: Execute one task from the "Interview Rotation" every 26 hours between 11:00 AM and 4:00 PM.
Rule: Only send ONE question at a time. Wait for the user's reply before logging the data.
Action: When the user replies, summarize their answer into professional, resume-ready bullet points and append it to CAREER.md under the matching category.

---

### Interview Rotation (Select one at random):

Category 1: Defining Core Values
* "Quick question for the career map: What is one development practice, workflow, or team dynamic you absolutely refuse to compromise on?"
* "What is a common industry practice you disagree with, and how do you prefer to handle it instead?"
* "If you were leading a new project tomorrow, what is the first rule you'd establish for the team?"

Category 2: Curating the Portfolio
* "Portfolio audit: What is the most complex component you've built recently using Vue3 and Tailwind CSS? What made it tricky to pull off?"
* "Think about your data flow: What is a piece of Laravel or Inertia architecture you wrote recently that you are genuinely proud of?"
* "Did you hit any major performance wins, optimize any queries, or refactor any messy code this week? Give me the short version."

Category 3: Career Mapping (Resume Builder)
* "Resume check: What is one measurable outcome, speed improvement, or feature launch you drove in your current role?"
* "What is a new technical concept or architectural pattern you mastered in the last three months?"
* "If you had to summarize your highest-impact project right now in just one sentence, what would it be?"

Clawdbot, [2/20/2026 9:04 AM]
I was able to read CAREER.md. It appears to be a structured document intended for logging your career-related information, with sections for Core Values, Portfolio/Projects, and Career Mapping/Resume Data.

However, as we haven't yet run the career mapping questions and processed your responses, these sections are currently placeholders.

Given that the cron job setup failed, we'll need to manually initiate the career mapping questions when you're ready. You can ask me to pose a question from the "Interview Rotation" categories at any time.

Clawdbot, [2/20/2026 9:05 AM]
Okay, Mohamad. Here's a question for your career map:

"Quick question for the career map: What is one development practice, workflow, or team dynamic you absolutely refuse to compromise on?"

Clawdbot, [2/20/2026 10:01 AM]
To document how I would read the latest Git commits and add them to minitilify_docs.md, here's the process I would follow:

Objective: Generate documentation of the latest Git commits and save it to a file named minitilify_docs.md.

Process:

1. Accessing the Git Repository:  • First, I would need to ensure that the Git repository is accessible from my current working environment. This typically means navigating to the root directory of the project that contains the .git folder.

2. Fetching Latest Commits:  • I would use the exec tool to run a Git command. A common and effective command for getting a concise log of recent commits is:git log --pretty=format:"- %h %s"
    • git log: This is the standard command to show the commit history.
    • --pretty=format:"- %h %s": This format specifier tells Git how to display each commit.      • %h: Abbreviated commit hash (e.g., a1b2c3d).
      • %s: The subject (first line) of the commit message.
      • - : This prepends a hyphen and a space, creating a bulleted list format.



3. Saving the Commits to minitilify_docs.md:  • Once I have the output from the Git command, I would use the write tool to save this information into a file named minitilify_docs.md.
  • The write tool creates or overwrites a file with the specified content.

Example Tool Sequence (Conceptual):

Let's say the Git command output is:

- a1b2c3d Implement feature X
- f9e8d7c Fix bug Y
- b4a5c6d Refactor Z module

