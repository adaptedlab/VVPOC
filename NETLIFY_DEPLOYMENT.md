# Deploying to Netlify

This guide explains how to deploy your Variable Valley app to Netlify with a clean, professional URL (no platform branding).

## Prerequisites

1. Your code is already on GitHub ✓
2. You have a Netlify account (free tier works fine)

## Deployment Steps

### Option 1: Deploy via Netlify Dashboard (Easiest)

1. **Go to Netlify**
   - Visit https://app.netlify.com
   - Sign in with your GitHub account

2. **Import Your Repository**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your Variable Valley repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - Click "Deploy site"

4. **That's it!** 
   - Netlify will build and deploy your app
   - You'll get a URL like: `your-app-name.netlify.app`
   - You can customize this or add a custom domain in Site Settings

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize your site
netlify init

# Deploy
netlify deploy --prod
```

## Custom Domain (Optional)

To use your own domain (e.g., `variablevalley.com`):

1. Go to your Netlify site dashboard
2. Click "Domain settings"
3. Click "Add custom domain"
4. Follow the DNS configuration instructions

## Environment Variables

If you need to add environment variables (like database credentials):

1. Go to your Netlify site dashboard
2. Click "Site configuration" → "Environment variables"
3. Add your variables (e.g., `DATABASE_URL`, `SESSION_SECRET`)

## What's Already Configured

The following files are already set up for Netlify deployment:

- ✅ `netlify.toml` - Netlify build configuration
- ✅ `netlify/functions/api.ts` - Serverless backend functions
- ✅ `package.json` - Build scripts configured
- ✅ `serverless-http` - Installed for serverless deployment

## Testing Your Deployment

After deployment, test these URLs:

- **Main app**: `https://your-app-name.netlify.app`
- **Pitch deck**: `https://your-app-name.netlify.app/pitch-deck`
- **Variable Valley game**: `https://your-app-name.netlify.app/`

## Continuous Deployment

Once connected to GitHub, Netlify automatically:
- Deploys when you push to your main branch
- Creates preview deployments for pull requests
- Shows build logs and deploy status

## Troubleshooting

**Build fails?**
- Check the build logs in Netlify dashboard
- Make sure all dependencies are in `package.json`

**404 errors?**
- The `netlify.toml` already handles client-side routing
- All routes redirect to `index.html` for React Router

**API not working?**
- API routes should be prefixed with `/api/`
- Check `netlify/functions/api.ts` for your endpoints

## Cost

- **Free tier includes:**
  - 100GB bandwidth/month
  - 300 build minutes/month
  - Custom domain support
  - HTTPS automatically included

This is perfect for investor demos and pilot programs!
