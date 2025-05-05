import React from "react";
import { 
  Box, 
  Typography, 
  Divider, 
  Chip, 
  Select,
  MenuItem, 
  Avatar,
  TextField,
  InputAdornment,
  Paper,
  useTheme,
  FormControl,
} from '@mui/material';
import { 
    Edit,
    Cancel,
    Euro,
  } from '@mui/icons-material';
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel";
import FormButton from "../../forms/components/FormButton";
import LoopIcon from "@mui/icons-material/Loop";
import { useNavigate } from "react-router-dom";

const DishForm = ({
  onSubmit,
  onReset,
  errors,
  validateForm,
  onInputChange,
  data,
  title,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box sx={{
      maxWidth: '1200px',
      margin: '0 auto',
      p: 4,
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      gap: 4
    }}>
      {/* Image Section - Left Side */}
      <Box sx={{ flex: 1 }}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
            Dish Image
          </Typography>
          <Avatar
            variant="rounded"
            src={data.imageUrl || "/placeholder-dish.jpg"}
            alt="Dish preview"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '400px',
              borderRadius: 2,
              boxShadow: theme.shadows[2],
              mb: 2
            }}
          />
          <Input
            name="imageUrl"
            label="Image URL"
            error={errors.imageUrl}
            onChange={onInputChange}
            data={data}
            fullWidth
          />
          <Input
            name="imageAlt"
            label="Image Description"
            error={errors.imageAlt}
            onChange={onInputChange}
            data={data}
            fullWidth
            sx={{ mt: 2 }}
          />
        </Paper>
      </Box>

      {/* Details Section - Right Side */}
      <Box sx={{ flex: 1 }}>
        <Form
          onSubmit={onSubmit}
          onReset={onReset}
          errors={errors}
          validateForm={validateForm}
          title={title}
          to={ROUTES.ROOT}
          styles={{ p: 0 }}
        >
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            {/* Basic Information */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Dish Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <Input
                name="name"
                label="Dish Name"
                error={errors.title}
                onChange={onInputChange}
                data={data}
                fullWidth
                sx={{ mb: 2 }}
              />
              
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <FormControl sx={{ minWidth: '50%' }}>
  <Select
    name="category"
    value={data.category || ''} // Handle empty state
    onChange={onInputChange}
    displayEmpty // This enables the empty state display
    renderValue={(selected) => {
      if (!selected) {
        return <em>Select a category</em>;
      }
      return selected;
    }}
  >
    <MenuItem disabled value="">
      <em>Select a category</em>
    </MenuItem>
    <MenuItem value="Starters">Starters</MenuItem>
    <MenuItem value="Breakfast">Breakfast</MenuItem>
    <MenuItem value="Lunch">Lunch</MenuItem>
    <MenuItem value="Dinner">Dinner</MenuItem>
  </Select>
</FormControl>
                <TextField
                  label="Price"
                  name="price"
                  value={data.price || ''}
                  onChange={onInputChange}
                  error={!!errors.price}
                  helperText={errors.price}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Euro fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ flex: 1 }}
                />
              </Box>

              <Input
                name="description"
                label="Description"
                error={errors.description}
                onChange={onInputChange}
                data={data}
                multiline
                rows={4}
                fullWidth
                sx={{ mb: 2 }}
              />
            </Box>

      
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
              <Typography>
                  Tags:
                </Typography> 
                {['Vegetarian', 'Gluten-Free', 'Spicy', 'Vegan'].map(tag => (
                  <Chip 
                  sx
                  key={tag}
                  label={tag}
                  size="small"
                  variant={data.tag?.includes(tag) ? "filled" : "outlined"}
                  onClick={() => {
                  // If tag is already selected, remove it
                  if (data.tag?.includes(tag)) {
                  const updatedTags = data.tag
                  .split(',')
                  .filter(t => t.trim() !== tag)
                  .join(',');
                  onInputChange({ target: { name: 'tag', value: updatedTags } });
                  } 
                  // If tag is not selected, add it
                  else {
                  const updatedTags = data.tag 
                  ? `${data.tag},${tag}`
                  : tag;
                  onInputChange({ target: { name: 'tag', value: updatedTags } });
                  }
                  }}
                  />
                ))}
              </Box>

              <Input
              name="tag"
              label="Tags"
              data={{ tag: data.tag || 'Click tags above to select' }}  // Pass as object if your Input expects this format
              disabled
              fullWidth
              sx={{
              '& .MuiInputBase-input': {
              color: 'text.primary',
              }
              }}
              />

            {/* Action Buttons */}

            <Box sx={{ 
            display: 'flex',
            gap: 2, 
            mt: 4
          }}>
     
            <FormButton
            node="Cancel"
            color="error"
            component="div"
            onClick={() => navigate(ROUTES.MANAGE_DISHES)}
            variant="outlined"
            startIcon={<Cancel />}
          />
          <FormButton
            node="Reset"
            variant="outlined"
            component="div"
            onClick={onReset}
            startIcon={<LoopIcon/>}
          />
          <FormButton
            node= 'Create'
            onClick={onSubmit}
            disabled={!validateForm()}
            size="large"
            startIcon={<Edit />}
          />
          </Box>
          </Paper>
        </Form>
      </Box>
    </Box>
  );
};

export default DishForm;