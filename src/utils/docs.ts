/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     description: Adds a new post to the system
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 example: My New Post
 *               content:
 *                 type: string
 *                 example: This is the content of the post
 *     responses:
 *       201:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: My New Post
 *                 content:
 *                   type: string
 *                   example: This is the content of the post
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2023-10-01T12:00:00Z
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2023-10-01T12:00:00Z
 */