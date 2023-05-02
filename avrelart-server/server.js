const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Import routes
const paintingsRoutes = require('./routes/paintings');
const photographsRoutes = require('./routes/photographs');
const achievementsRoutes = require('./routes/achievements');
const adminRoutes = require('./routes/admin');

// Use routes
app.use('/api/paintings', paintingsRoutes);
app.use('/api/photographs', photographsRoutes);
app.use('/api/achievements', achievementsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/images', express.static('data/paintings'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
