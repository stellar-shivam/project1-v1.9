const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'pages');

const mapping = {
  'LandingPage.jsx': [
    { regex: /<button([^>]*)>\s*Login\s*<\/button>/g, replace: '<Link to="/account/signin"><button$1>Login</button></Link>'},
    { regex: /<button([^>]*)>\s*Try now for free\s*<\/button>/g, replace: '<Link to="/account/signup"><button$1>Try now for free</button></Link>'}
  ],
  'SignIn.jsx': [
    { regex: /<a([^>]*)href="[^"]*"([^>]*)>\s*Create an account([\s\S]*?)<\/a>/g, replace: '<Link$1to="/account/signup"$2>Create an account$3</Link>'},
    { regex: /<a([^>]*)href="[^"]*"([^>]*)>\s*Forgot password\?([\s\S]*?)<\/a>/g, replace: '<Link$1to="/account/forgot-password"$2>Forgot password?$3</Link>'},
    { regex: /<button([^>]*)>\s*Login\s*<\/button>/g, replace: '<Link to="/analysis/upload" className="w-full relative z-10 block"><button$1>Login</button></Link>'}
  ],
  'SignUp.jsx': [
    { regex: /<a([^>]*)href="[^"]*"([^>]*)>\s*Log in([\s\S]*?)<\/a>/g, replace: '<Link$1to="/account/signin"$2>Log in$3</Link>'},
    { regex: /<button([^>]*)>\s*Create Account\s*<\/button>/g, replace: '<Link to="/analysis/upload" className="w-full relative z-10 block"><button$1>Create Account</button></Link>'}
  ],
  'ForgotPassword.jsx': [
    { regex: /<a([^>]*)href="[^"]*"([^>]*)>\s*Return to login([\s\S]*?)<\/a>/g, replace: '<Link$1to="/account/signin"$2>Return to login$3</Link>'},
    { regex: /<button([^>]*)>\s*Send Reset Link\s*<\/button>/g, replace: '<Link to="/account/signin" className="w-full block relative z-10"><button$1>Send Reset Link</button></Link>'}
  ],
  'VideoUpload.jsx': [
    { regex: /<span([^>]*)>\s*Logout\s*<\/span>/g, replace: '<Link to="/"><span$1>Logout</span></Link>'},
    { regex: /<button([^>]*)>\s*Upload Evidence\s*<\/button>/g, replace: '<Link to="/analysis/results" className="w-full block relative z-10"><button$1>Upload Evidence</button></Link>'}
  ],
  'VideoAnalysis.jsx': [
    { regex: /<span([^>]*)>\s*Logout\s*<\/span>/g, replace: '<Link to="/"><span$1>Logout</span></Link>'},
    { regex: /<button([^>]*)>\s*End Analysis\s*<\/button>/g, replace: '<Link to="/analysis/upload"><button$1>End Analysis</button></Link>'}
  ]
};

for (const [file, replacements] of Object.entries(mapping)) {
  const filePath = path.join(srcDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    for (const r of replacements) {
      content = content.replace(r.regex, r.replace);
    }
    fs.writeFileSync(filePath, content);
    console.log('Safely fixed', file);
  }
}
