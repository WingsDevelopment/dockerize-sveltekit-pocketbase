# install:

- npm i <br />

# start in dev:

start sveltekit: <br />

- npm run dev <br />
  start pocketbase: <br />
- docker-compose -f .\docker-compose-infra.yml up -d <br />

Setup pocketbase collection: <br />
copy json from file: import_pocketbase_collection
into pocketbase:

![alt text](./import-guide.png)

everything is working now <br />

# start in docker:

first turn off pocketbase <br />

- docker-compose down <br />
  then just run <br />
- docker-compose up -d <br />

app will be available on localhost:5050 <br />
pocketbase is still on localhost:8090 <br />
