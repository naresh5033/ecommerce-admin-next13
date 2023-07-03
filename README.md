# Full stack Ecommerce site 

- its a Ecommerce website with the store and the admin Cms to manage the store, and stripe payment integration.f 
- its a Next js application, with taiwind css, prisma, mysql

# admin CMS

- the admin cms has the lot of functionalities, we can add the product or create a new categories add images, and make then appear on the feature page or if its our of stock can add em to the archieve,
- we can also see whether the customer paid or not, and how much revenue has been generated in a particular category/store
- we will ve a dashboard feature which will shows the store net income of mothwise
# Dependencies (Admin)

- shadcn/ui we will set up this project using the shadcn/ui .. It's a collection of re-usable components that you can copy and paste into your apps. Pick the components you need. Copy and paste the code into your project and customize to your needs.
- the shadcn uses the radix ui for its components as the underlying ui, so when we install shadcn it will install the radix ui as well, and when we use/ import the comp in our project we wana make sure that we use the shadcn comps, since they both has the same name.
- for ex if we wana add a button ```npx shadcn-ui@latest add button``` this will create a button component in the comp dir/ui/button.ts
- we can add the user button or any comp, all modular
- for the dialog ```npx shadcn-ui@latest add dialog```
- for the combo box we can directly install, and its a combination of popover and command ```npx shadcn-ui@latest add popover``` and ```npx shadcn-ui@latest add command``` and this combo box we can use it for our store switcher
- ```npx shadcn-ui@latest add form``` - forms(uses react hook form and zod), lly add the input (for our form)
- ```npx shadcn-ui@latest add separator``` - the separator line <hr>
- ```npx shadcn-ui@latest add alert badge select checkbox card```
- for the data table(the recommended way is to creat a cust one) ```npx shadcn-ui@latest add table dropdown-menu``` and ```npm i @tanstack/react-table``` 
- if we look into the doc it says 3 steps to follow 1. column definition 2. <DataTable> component, 
- then add  the pagination to the table Update Table. ve to add getPaginationRowModel, then add the pagination control, and other funcionalities such as filtering, sorting
- ```npx create-next-app@latest ecommerce-admin --typescript --tailwind --eslint```
- ```npx shadcn-ui@latest init```
    - while creating use the app-router (instead of pages the old way of creating the   api) which heavily rely on the server comp
    - and with this we can make the route grouping as well ex app/(root)/
    - and each group can ve its own layout 
- clerk for the authentication ```npm install @clerk/nextjs``` - it provides the clerk provider (in both app-router and the page router) which we can wrap our app.
  - and then ve to create a middleware(as per doc)
  - and app/sign-up/[[...sign-up]]/page.tsx --> is the routing convention in order for the clerk to provide the authentication. 
  - and lly for the sign-in app/sign-in/[[...sign-in]]/page.tsx
- zustand - for the state management. ```npm i zustand```
- Prisma (orm) ```npm i -D prisma``` and add add the client ```npm i @prisma/client``` then ```npx  prisma init``` will creates a prisma.shema file, and to add/ gen store  ```npx prisma generate``` and it will also gen/ add store to our node module, ```npx prisma db push``` to push the schema to database.
- ```npm prisma migrate reset``` to reset the database
- for the database we can use the planetscale (mysql) provider
- axios ```npm i axios``` for fetching data
- react-toast ```npm i react-hot-toast``` for the notification, make it as a provider and add it the layout
- icons from the lucid-react ```npm i lucide-react```
- cloudinary ```npm i next-cloudinary``` for the media upload
- date fns ```npm i date-fns``` 
- ```npm i clsx tailwind-merge``` for merging the classname (in the utils/lib)
- recharts ```npm i recharts``` to display the graph in our admin dashboard(overview comp), we can make bar, bar charts, or responsive containers with this rechart
- dark theme ```npm i next-themes```, refer the code in shadcn and wrap our root layout with this theme provider and we can also grab the toggle(can use it in the nav bar) code for our theme from the shadcn

# dependencies for frontend

  - create the next project ```npx create-next-app@latest ecommerce-store --typescript --tailwind --eslint```
  - ```npm i clsx tailwind-merge``` for merging the classname (in the utils/lib)
  - in the types.ts file we can make our objs(from our admin) such as categories, billboards etc
  - icons from the lucid-react ```npm i lucide-react```
  - query string ```npm i query-string``` this will Parse and stringify URL query strings.
  - headless ui ```npm i @headlessui/react``` we will use the <Tab> for our gallery, gallery-tab components
  - zustand ```npm i zustand``` for the store/ state management
  - react-hot-toast ```npm i react-hot-toast``` for notifications
  - axios ```npm i axios```
  - stripe ```npm i stripe``` for the payment integration, once we impl the payment routes.ts/check/api we ve to connect to the webhook in the strip and select try in local environment. and install the strip cli 
  - ```stripe login``` then ```stripe listen --forward-to localhost:3000/api/webhook``` will generate the sign in secret
  - then we will create a webhook.ts/api/  and there we will use our secret to connect to the webhook
  -  ```stripe trigger payment_intent.succeeded``` to check the webhook we created and as a sucess it returns nothing and the status code 200 (ok)


### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Connect to PlanetScale and Push Prisma
```shell
npx prisma generate
npx prisma db push
```


### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
