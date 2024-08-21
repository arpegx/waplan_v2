# waplan_v2

The purpose of this application is to help out on communication.
May you know, how hard to say either anyone in your flat has recently watered the plants.
Therefor they suffer from to much water or drying in midsun.

Let's solve this issue. Help em survive !

## Technical Stack

-   Laravel / Breeze
-   Inertia
-   React / TypeScript
-   Vite
-   TailwindCSS
-   PostCSS
-   PestPHP
-   MariaDB

## Setup

clone the repo

```shell
git clone https://github.com/arpegx/waplan_v2.git
```

configure your own .env

```env
DB_DATABASE=your_db
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_user_password
```

setup your database:

-   create the user accordingly to your .env configuration
-   as well as the database
-   grant your permissions and flush privileges

migrate via

```shell
php artisan migrate
```

## Run it

### for development:

launch the application

```shell
php artisan serve
npm run dev
```

## Testing

PestPHP is installed by default, cause its so nice

```shell
php artisan test
```
