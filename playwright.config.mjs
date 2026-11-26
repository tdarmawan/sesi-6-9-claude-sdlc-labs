import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./e2e',workers:1,use:{baseURL:'http://127.0.0.1:4176',trace:'retain-on-failure'},webServer:{command:'npm start',url:'http://127.0.0.1:4176',reuseExistingServer:false},reporter:[['list']]});
