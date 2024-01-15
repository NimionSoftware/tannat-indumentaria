import React, { useContext, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material';
import SearchComponent from '../Shared/SearchComponent';
import { providerContext } from '../ProviderContextComponent';

const ContainerFilters = styled('div')({
  display:'flex',
  alignItems:'center',
  flexDirection:'column',
  backgroundColor:'#f3f3f3',
  width:'18rem',
  padding:'1rem',
})

const FilterComponent = ({ filters, checks }) => {
  const { checked, setChecked } = useContext(providerContext);

  const handleToggle = (filterType, value) => () => {
    const newChecked = { ...checked };

    if (newChecked[filterType]?.includes(value)) {
      newChecked[filterType] = newChecked[filterType].filter((val) => val !== value);
    } else {
      newChecked[filterType] = newChecked[filterType] ? [...newChecked[filterType], value] : [value];
    }

    setChecked(newChecked);
  };

  const [expanded, setExpanded] = React.useState({});

  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded({ ...expanded, [panel]: isExpanded });
  };

  return (
    <ContainerFilters>
      <SearchComponent />
      <div style={{ width: '15rem' }}>
        {filters.map((filter, index) => {
          const panelId = `panel${index + 1}`;
          const filterValues = checks.find((check) => check.hasOwnProperty(filter))[filter];
          return (
            <Accordion
              key={index}
              expanded={expanded[panelId]}
              onChange={handleChange(panelId)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${panelId}bh-content`}
                id={`${panelId}bh-header`}
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>{filter}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  {filterValues.map((value, indexx) => {
                    const labelId = `checkbox-list-label-${value}`;
                    return (
                      <ListItem key={indexx} disablePadding>
                        <ListItemButton role={undefined} onClick={handleToggle(filter.toLowerCase(), value)} dense>
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={(checked[filter.toLowerCase()] || []).includes(value)}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ 'aria-labelledby': labelId }}
                              onChange={(event) => {
                                event.preventDefault();
                                handleToggle(filter.toLowerCase(), value)();
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText id={labelId} primary={`${value}`} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </ContainerFilters>
  );
};

export default FilterComponent;
