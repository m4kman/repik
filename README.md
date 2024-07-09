# Repik

An AI-based web app that uses the famous GFPGAN model to upscale and enhance old photos.

<p align="center">
  <img
    src="https://github.com/m4kman/repik/blob/main/public/assets/repik.png?raw=true" alt="Repik Logo"
</p>

## Tech Stack

This project uses the following stack:

- Next.js (App Router)
- Cloudinary (Storage)
- Replicate (Model API)
- Tailwind CSS (Styling)
- Framer Motion (Animations)

> [!NOTE]
> To work with this project, you should obviously have knowledge in the
> above stack, as well as working with REST APIs, some of the newer hooks and
> additions in React (useFormStatus, actions, etc.), and Next.js Route Handlers.

## Getting Started

To get started with this project on a local environment, clone the repo, and use
your favorite package manager to install the modules.

Then, you are going to need to create a few _environment variables_ that are used
in the project throughout.

Following environment variables are used in this project:

- URL (web url, localhost in case of a local environment)
- CLOUDINARY_UPLOAD_API
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
- REPLICATE_API_TOKEN
- REPLICATE_MODEL_URL

## Improvements

There is much room for improvements, since this project (at this point) only
implements the basic functionality of the app.

Following are some of the improvements that can be made (off the top of my mind
right now):

- Prevent layout shift when displaying restored image.
- Add functionality for providing a prompt to the model (this will require you
  to change the AI model).
- Detect if face enhancement is unnecessary, useful for upscaling images with no
  people (this will also require you to change the model).
- and much more..
