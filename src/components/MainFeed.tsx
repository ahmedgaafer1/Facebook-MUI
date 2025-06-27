
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  IconButton,
  TextField,
  Button,
  Divider,
} from '@mui/material';
import {
  ThumbUp as LikeIcon,
  ChatBubbleOutline as CommentIcon,
  Share as ShareIcon,
  PhotoLibrary as PhotoIcon,
  VideoCall as VideoIcon,
  EmojiEmotions as EmojiIcon,
} from '@mui/icons-material';

const CreatePost: React.FC = () => (
  <Card sx={{ mb: 2, borderRadius: 2 }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar sx={{ mr: 2 }}>AY</Avatar>
        <TextField
          fullWidth
          placeholder="What's on your mind?"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              backgroundColor: 'action.hover',
              '& fieldset': { border: 'none' },
            },
          }}
        />
      </Box>
      <Divider sx={{ mb: 1 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button startIcon={<VideoIcon />} color="inherit">
          Live video
        </Button>
        <Button startIcon={<PhotoIcon />} color="inherit">
          Photo/video
        </Button>
        <Button startIcon={<EmojiIcon />} color="inherit">
          Feeling/activity
        </Button>
      </Box>
    </CardContent>
  </Card>
);

interface Post {
  id: number;
  author: string;
  time: string;
  content: string;
  image?: string;
}

const PostCard: React.FC<{ post: Post }> = ({ post }) => (
  <Card sx={{ mb: 2, borderRadius: 2 }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar sx={{ mr: 2 }}>{post.author[0]}</Avatar>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            {post.author}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {post.time}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {post.content}
      </Typography>
      {post.image && (
        <Box
          component="img"
          src={post.image}
          alt="Post content"
          sx={{
            width: '100%',
            borderRadius: 1,
            mb: 2,
          }}
        />
      )}
    </CardContent>
    <Divider />
    <CardActions sx={{ justifyContent: 'space-around', py: 1 }}>
      <Button
        startIcon={<LikeIcon />}
        color="inherit"
        sx={{ flex: 1, borderRadius: 2 }}
      >
        Like
      </Button>
      <Button
        startIcon={<CommentIcon />}
        color="inherit"
        sx={{ flex: 1, borderRadius: 2 }}
      >
        Comment
      </Button>
      <Button
        startIcon={<ShareIcon />}
        color="inherit"
        sx={{ flex: 1, borderRadius: 2 }}
      >
        Share
      </Button>
    </CardActions>
  </Card>
);

const MainFeed: React.FC = () => {
 const posts = [
  {
    id: 1,
    author: 'Mostafa Magdy',
    time: '2 hours ago',
    content: 'Started learning TypeScript today! Honestly, it makes JavaScript feel way more powerful. 🔥💻',
  },
  {
    id: 2,
    author: 'Ola Ghanem',
    time: '3 hours ago',
    content: 'Coffee + Code = Perfect morning ☕💻. Anyone else like working from cozy cafes?',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=300&fit=crop',
  },
  {
    id: 3,
    author: 'Ahmed Gaafer',
    time: '5 hours ago',
    content: 'Finally deployed my first full-stack project! Feeling super proud today. 🚀✨',
  },
];


  return (
    <Box
      sx={{
        flex: 1,
        p: 2,
        maxWidth: 680,
        mx: 'auto',
        pt: 10, // Account for AppBar height
      }}
    >
      <CreatePost />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default MainFeed;
