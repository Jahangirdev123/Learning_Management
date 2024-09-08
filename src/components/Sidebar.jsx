import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

export default function ClippedDrawer() {
  const [open, setOpen] = React.useState(false);
  const [open1,setOpen1]=React.useState(false)
  const [subjects,setSubject]=React.useState(false)
  const [syllabus,setSyllabs]=React.useState(false)
  const [school,setSchool]=React.useState(false)
  
  const HandleSchool=()=>{
    setSchool(!school)
  }
  
  const SyllabusHandle=()=>{
    setSyllabs(!syllabus)
  }
  const Subjectshandle=()=>{
    setSubject(!subjects)
  }
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Learning Management System
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
         
          <List>
            <ListItem>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Students" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            {/* <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {['Student Registration ', 'StudentList'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
                
               </List>
            </Collapse> */}

<Collapse in={open} timeout="auto" unmountOnExit>
  <List component="div" disablePadding>
    {['StudentRegistration', 'StudentList'].map((text, index) => (
      <ListItem key={text} disablePadding>
        <ListItemButton sx={{ pl: 4 }} component={Link} to={text === 'StudentRegistration' ? '/student-registration' : '/student-list'}>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
</Collapse>
            <ListItem>
              <ListItemButton onClick={handleClick1}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Teachers" />
                {open1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {['TeacherRegistration', 'TeacherList'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton sx={{ pl: 4 }} component={Link} to={text === 'TeacherRegistration' ? '/TeacherRegistration' : '/TeacherList'}>
                      
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
                
               </List>
            
            
            </Collapse>
            <ListItem>
              <ListItemButton onClick={Subjectshandle}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Subjects" />
                {open1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={subjects} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {['Sujects Add', 'Subject List'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton sx={{ pl: 4 }} component={Link} to={text === 'Sujects Add' ? '/Subjects' : '/SubjectList'}>
                      
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
                
               </List>
            
            
            </Collapse>
            <ListItem>
              <ListItemButton onClick={SyllabusHandle}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Syllabus" />
                {syllabus ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={syllabus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {['Syllabus', 'Syllabus List'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton sx={{ pl: 4 }} component={Link} to={text === 'Syllabus' ? '/Syllabus' : '/SyllabusList'}>
                      
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
                {/* School */}
                
                
               </List>
            
            
            </Collapse>
            <ListItem>
              <ListItemButton onClick={SyllabusHandle}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Schools" />
                {syllabus ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={syllabus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {['Registration', 'Syllabus List'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton sx={{ pl: 4 }} component={Link} to={text === 'Syllabus' ? '/Syllabus' : '/SyllabusList'}>
                      
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
                {/* School */}
                
                
               </List>
            
            
            </Collapse>
            <ListItem>
              <ListItemButton onClick={SyllabusHandle}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Class" />
                {syllabus ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={syllabus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {['Class From', 'Class List'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton sx={{ pl: 4 }} component={Link} to={text === 'Syllabus' ? '/Syllabus' : '/SyllabusList'}>
                      
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
                {/* School */}
                
                
               </List>
            </Collapse>

              {/*  */}
              <ListItem>
              <ListItemButton onClick={SyllabusHandle}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Fees" />
                {syllabus ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={syllabus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {['Syllabus', 'Syllabus List'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton sx={{ pl: 4 }} component={Link} to={text === 'Syllabus' ? '/Syllabus' : '/SyllabusList'}>
                      
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
                {/* School */}
                
                
               </List>
            
            
            </Collapse>
            <ListItem>
              <ListItemButton onClick={SyllabusHandle}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Admission" />
                {syllabus ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={syllabus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {['Syllabus', 'Syllabus List'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton sx={{ pl: 4 }} component={Link} to={text === 'Syllabus' ? '/Syllabus' : '/SyllabusList'}>
                      
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
                {/* School */}
                
                
               </List>
            
            
            </Collapse>



          </List>
          <ListItem>
              <ListItemButton onClick={SyllabusHandle}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Exam" />
                {syllabus ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={syllabus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {['Exam', 'Exam Schedule'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton sx={{ pl: 4 }} component={Link} to={text === 'Syllabus' ? '/Syllabus' : '/SyllabusList'}>
                      
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
                {/* School */}
                
                
               </List>
            
            
            </Collapse>
        </Box>
      </Drawer>
          </Box>
  );
} 