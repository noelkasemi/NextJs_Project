const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.json());

require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const articleSchema = new mongoose.Schema({
  content: { type: String, required: true },
  image: { type: String }, // Store the image path or filename
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Article = mongoose.model('Article', articleSchema);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/api/articles', upload.single('image'), async (req, res) => {
  const { content } = req.body;
  const imagePath = req.file ? `/images/${req.file.filename}` : undefined;

  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }

  try {
    const newArticle = await Article.create({ content, image: imagePath });
    res.json(newArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

app.get('/api/articles/title/:title', async (req, res) => {
  const { title } = req.params;

  try {   
    // Decode spaces to hyphens to match the title
    const decodedTitleWithSpace = decodeURIComponent(title.replace(/-/g, ' '));

    // Update the query to search for the title within HTML content
    const articles = await Article.find();
    const foundArticle = articles.find(article => {
      const dom = new JSDOM(article.content);
      const h1Element = dom.window.document.querySelector('h1');
      return h1Element && h1Element.textContent === decodedTitleWithSpace;
    });

    if (!foundArticle) {
      return res.status(404).json({ error: 'Article not found' });
    }

    res.json(foundArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//route to get an article by id
app.get('/api/articles/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.put('/api/articles/:id', async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      id,
      { title, content, updated_at: Date.now() },
      { new: true }
    );

    res.json(updatedArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/api/articles/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Article.findByIdAndDelete(id);
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});