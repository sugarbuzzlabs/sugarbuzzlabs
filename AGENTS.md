<claude-mem-context>
# Memory Context

# [SugarbuzzLabsSite] recent context, 2026-06-20 10:29am EDT

Legend: 🎯session 🔴bugfix 🟣feature 🔄refactor ✅change 🔵discovery ⚖️decision 🚨security_alert 🔐security_note
Format: ID TIME TYPE TITLE
Fetch details: get_observations([IDs]) | Search: mem-search skill

Stats: 35 obs (11,099t read) | 468,161t work | 98% savings

### Jun 2, 2026
1916 2:22p ⚖️ Deployment Architecture Plan: Prototype → Live Site
1917 " 🔵 SugarbuzzLabsSite Prototype: Pure Static Frontend, No Backend
1918 " 🔵 Prototype Architecture: CDN-Loaded React + Babel, No Build Step
1919 2:23p 🔵 Waitlist Form: localStorage-Only, No Backend Submission
1920 " ⚖️ Deployment Blockers Identified Before Plan Creation
1925 2:29p ⚖️ Deployment Plan Requested: Prototype → Production (Railway/Netlify)
1926 " ⚖️ Deployment Strategy: Netlify-first + Netlify Forms for Waitlist
1927 " 🔵 SugarbuzzLabsSite Repo: Prototype-Only Structure
1943 " ⚖️ SugarbuzzLabsSite: Full Vite + Netlify Production Plan Approved
1944 4:24p 🟣 SugarbuzzLabsSite Implementation Started: Vite Scaffold Phase
1945 " 🔵 prototype/styles/ Missing colors_and_type.css and site.css
1946 " 🟣 Vite App Scaffold + Netlify Config Created
1947 " 🟣 src/data/siteData.jsx Created: All Site Data + Shared Components
1948 " 🟣 src/components/sections.jsx Created: All Page Sections
1968 4:28p ⚖️ SugarbuzzLabsSite pushed to GitHub — next steps for Netlify deploy
1949 4:30p 🟣 Sugarbuzz Labs prototype converted to production Vite/React site with Netlify deploy config
1971 8:17p 🔵 Netlify Forms fail on local dev server — expected behavior
1980 " 🔴 Waitlist success state uses hardcoded light-green colors instead of CSS vars
1972 8:18p 🔴 Netlify Forms 404 Fix — Static Form Definition + /forms.html POST Target
1981 8:45p 🔵 basehitz.netlify.app unreachable from sandbox — DNS resolution fails
1982 " 🔵 Base Hitz live site content fully scraped from basehitz.netlify.app
1986 " 🟣 Base Hitz assets downloaded from live site into SugarbuzzLabsSite public dir
1983 " 🔴 Netlify Forms POST 404 Fixed via Static forms.html
1984 " 🔴 Waitlist Success Message Contrast Fixed for Dark Theme
1985 " 🔵 Sandbox Blocks Outbound Network — Cannot Fetch basehitz.netlify.app
1987 " 🟣 Base Hitz screenshots downloaded to public/assets/screens/basehitz/
1988 8:46p 🟣 Additional Base Hitz screenshot downloaded: screen-lineup-order.png
1990 " 🟣 Base Hitz content updated in siteData.jsx to match live product
1989 " 🟣 All Base Hitz screenshots downloaded — asset set complete
1991 " 🟣 Gallery component updated to prefer galleryScreens over screens
1992 8:47p 🟣 Build passes after Base Hitz content update
1993 " 🔵 Preview server not running after rebuild — needs restart before asset verification
1994 " 🟣 Base Hitz PNG assets verified serving from preview server
### Jun 6, 2026
**2177** 3:26p ⚖️ **GitHub Repo Naming Convention for SugarBuzzLabs**
User is setting up a new GitHub organization for SugarBuzzLabs LLC and researching repo naming conventions. Key question: how to encode platform type into repo names. Common patterns include suffixes like `-web`, `-ios`, `-macos`, `-api`, or prefixes like `sugarbuzzlabs.web.*`. C# ecosystem often uses `CompanyName.ProductName` dot-notation. No final convention was chosen yet — this was an exploratory question.

**2178** " 🔵 **SugarbuzzLabs Site Repo Structure**
The SugarbuzzLabs marketing/company site lives under Patrick's personal GitHub account (phoydar/sugarbuzzlabs), not a dedicated SugarBuzzLabs org. Built with Vite, deployed to Netlify. This is relevant context for the repo naming discussion — the existing site repo uses no platform suffix, just the brand name. A fresh org-level GitHub account is being planned which may warrant a renaming or migration strategy.


Access 468k tokens of past work via get_observations([IDs]) or mem-search skill.
</claude-mem-context>