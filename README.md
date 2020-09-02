# Woop-dee-doo: A personal site for me with Gatsby and [Headless] Wordpress

I want a mobile authoring interface for blog posts served as a static site. Hence, this.

# Notes to self

At first I was using the remote WordPress site to build the static site during development. After a bit this began getting throttled by some part of the network. Network calls to the remote were taking greater than 15 seconds to complete. That led to configuring the codebase to work with a local copy of the site.

Use `docker-compose -f stack.yml up`, then load a copy of the production WordPress site using the WP All-in-one migration w/ the import extension to have a local "copy" (I use "copy" loosely here) of the site for development. The export of the prod site can only be done by an authenticated user so it's secure like that.

Maybe "better copy" of production for local development would be to deploy production with the same docker containers used here, then sync the volumes locally for development, accounting for the proper authentication/networking restrictions.

If other's want to get in on the dev fun then create users and stuff on the fly.

---
