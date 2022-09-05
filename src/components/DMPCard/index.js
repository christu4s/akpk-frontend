import { makeStyles } from '@mui/styles';
import React from 'react'
import { ReactSVG } from 'react-svg';

const useStyles = makeStyles((theme) => ({
    cardWrapper: {
        padding: 16,
        backgroundColor: '#FCFCFD',
        borderRadius: 8,
        boxShadow: '0px 3px 16px #E9E9E9'

    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleWrapper :{
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        fontSize: 26,
        color: '#171725',
        letterSpacing: 0.19
    },
    icon: {
        width: 64,
        height: 64,
        marginRight: 28
    },
    divider: {
        border: '1px solid #E9E9E9'
    },
    content: {
        display: 'flex',
        alignItems: 'center', 
        // justifyContent: 'space-between',

        '&>div:nth-of-type(1) > span' :{
            backgroundColor: '#2196F3'
        },
        '&>div:nth-of-type(2) > span' :{
            backgroundColor: '#19D277'
        },
        '&>div:nth-of-type(3) > span' :{
            backgroundColor: '#FFA726'
        },
        '&>div:nth-of-type(4) > span' :{
            backgroundColor: '#E53D30'
        }
    },
    element: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        '&> p': {
            letterSpacing: 0.11,
            color: '#171725',
            fontSize: 16, 
            marginRight: 16
        },
        '&> span': {
            color: '#FCFCFD',
            fontSize: 16,
            letterSpacing: 0.11,
            borderRadius: 8, 
            padding: '3px 14px'
        },
        
    },

}));

const DmpCard = ({title, icon, Button, content}) => {
    const styles= useStyles();
  return (
    <div className={styles.cardWrapper}>
    <div className={styles.header}>
        <div className={styles.titleWrapper}>
            <ReactSVG 
                src={require(`../../assets/icons/${icon}.svg`)}
                className={styles.icon}
            />
            <h6 className={styles.title}>{title}</h6>
        </div>
            {Button}
        
    </div>
    <hr className={styles.divider}/>
    <div className={styles.content}>
        {
            content?.map(({title, value}) => {
                return <div className={styles.element}>
                    <p>{title}</p>
                    {value && <span>{value}</span>}
                </div>
            })
        }
    </div>
    </div>
  )
}

export default DmpCard