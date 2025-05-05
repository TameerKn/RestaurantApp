import React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

const TagChips = ({ 
  tagsString, 
  onTagClick, 
  emptyMessage = "No tags",
  chipProps = {},
  containerProps = {} 
}) => {
      
    const theme = useTheme();

  // Safely handle undefined/null/empty strings
  const tagsArray = tagsString?.split(',')
    ?.map(tag => tag.trim())
    ?.filter(tag => tag.length > 0) || [];

  if (tagsArray.length === 0) {
    return (
      <Typography variant="caption" color="text.secondary">
        {emptyMessage}
      </Typography>
    );
  }

  return (
    <Box 
      sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}
      {...containerProps}
    >
      {tagsArray.map((tag, index) => (
        <Chip
          key={`${tag}-${index}`}
          label={tag}
          size="small"
          variant="outlined"
          onClick={onTagClick ? () => onTagClick(tag) : undefined}
          sx={{ m:0.5, background: theme.palette.primary.contrastText,
            cursor: onTagClick ? 'pointer' : 'default',
            ...chipProps.sx
          }}
          {...chipProps}
        />
      ))}
    </Box>
  );
};

export default TagChips;