const express = require('express');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

// Read all users
app.get('/nasabah', async (req, res) => {
    const nasabahList = await prisma.nasabah.findMany();
    res.json(nasabahList);
  });
  
  // Read a user by ID
  app.get('/nasabah/:id', async (req, res) => {
    const { id } = req.params;
    const result = await prisma.nasabah.findMany({
      where: { id: parseInt(id) },
    });
    res.json(result);
  });
  
  // Create a user
  app.post('/nasabah', async (req, res) => {
    const { username, balance } = req.body;
    const result = await prisma.nasabah.create({
      data: {
        username,
        balance: parseInt(balance),
      },
    });
    res.json(result);
  });
  
  // Update a user
  app.put('/nasabah/:id', async (req, res) => {
    const { id } = req.params;
    const { username, balance } = req.body;
    const result = await prisma.nasabah.update({
      where: { id: parseInt(id) },
      data: { username, balance: parseInt(balance) },
    });
    res.json(result);
  });
  
  // Delete a user
  app.delete('/nasabah/:id', async (req, res) => {
    const { id } = req.params;
    const result = await prisma.nasabah.delete({
      where: { id: parseInt(id) },
    });
    res.json(result);
  });

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});