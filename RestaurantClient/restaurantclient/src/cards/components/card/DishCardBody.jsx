import { CardContent, CardHeader,  Typography, Chip, useTheme } from "@mui/material";
import React from "react";
import TagChips from "../../../components/ui/TagChips";

export default function DishCardBody({
  name,
  price,
  description,
  tag,
}) {
    const theme = useTheme();
  return (
    <>
      <CardHeader sx={{textAlign:'center' }}  title={name}/>
      <CardContent sx={{textAlign:'center', maxHeight:'500'}}>
      <Typography variant="body2" color="text.secondary">
      <TagChips 
      tagsString={tag}
      containerProps={{
      sx: { mt:-4, mb:1 }}}
      />        
      </Typography>
        <Typography variant="body2" color="text.secondary" fontWeight={'bold'}>
          {price}$
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{p:2.3}}>
          {description}
        </Typography>
      </CardContent>
    </>
  );
}