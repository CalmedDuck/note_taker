const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/api.js');


const PORT = process.env.PORT || 3001;

const app = express();

