import Typography from '@mui/material/Typography';

export default function CustomToolbar({ pageTitle }) {
  return (
    <div
      style={{
        paddingTop: '24px',
        paddingLeft: '48px',
        paddingBottom: '24px',
        marginLeft: '-48px',
        backgroundImage: 'linear-gradient(to left, rgba(152,152,152,0), rgba(152,152,152,1))',
        color: 'white',
      }}
    >
      <Typography component="h1" variant="h6" color="inherit" noWrap>
        <span style={{ textTransform: 'uppercase' }}>{pageTitle}</span>
      </Typography>
    </div>
  );
}
