import React from 'react';
import sl from './profile.module.css';
import {Avatar, Tab, Tabs} from "@mui/material";
import { IoMdSettings } from "react-icons/io";
import {Link} from "react-router-dom";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import { CiEdit } from "react-icons/ci";
import {generateFakeData} from "../../App";
import { makeStyles } from '@mui/styles';
import {FaComment, FaHeart} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    indicator: {
        backgroundColor: '#7535FC', // Цвет полоски таба
    },
    textColor: {
        color: '#7535FC', // Цвет текста таба
    },
    activeIcon: {
        color: '#7535FC', // Цвет активной иконки таба
    },
}));

const Profile = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();

    return (
        <div className={sl.bg}>
            <div className={sl.pr}>
                <div className={sl.row}>
                    <Avatar style={{width: '150px', height: '150px'}}/>
                    <div className={sl.info}>
                        <div className={sl.info_row}>
                            <h4 className={sl.info_username}>myusername</h4>
                            <div className={sl.info_btns}>
                                <Link to='/edit/profile' className={sl.info_btn}>
                                    <CiEdit />
                                </Link>
                                <Link to='/settings' className={sl.info_btn}>
                                    <IoMdSettings />
                                </Link>
                            </div>
                        </div>
                        <div className={sl.info_row}>
                            <p className={sl.info_fact}>
                                12 публикации
                            </p>
                            <p className={sl.info_fact}>
                                12 подписок
                            </p>
                            <p className={sl.info_fact}>
                                12 подписчиков
                            </p>
                        </div>
                        <p className={sl.info_fullname}>
                            my fio
                        </p>
                        <p className={sl.info_desc}>
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                </div>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    classes={{
                        indicator: classes.indicator,
                        textColorPrimary: classes.textColor,
                    }}
                >
                    <Tab
                        icon={<AppsOutlinedIcon className={value === 0 ? classes.activeIcon : ''} />}
                    />
                    <Tab
                        icon={<BookmarkBorderOutlinedIcon className={value === 1 ? classes.activeIcon : ''} />}
                    />
                    <Tab
                        icon={<GroupsIcon className={value === 2 ? classes.activeIcon : ''} />}
                    />
                </Tabs>
            </div>
            <div className={sl.posts}>
                {generateFakeData(10).map((item) => (
                    <div key={item} className={sl.posts_item}>
                        <div className={sl.posts_item_facts}>
                            <div className={sl.posts_item_fact}>
                                <FaHeart />
                                <span>
                                    12
                                </span>
                            </div>
                            <div className={sl.posts_item_fact}>
                                <FaComment/>
                                <span>
                                    12
                                </span>
                            </div>
                        </div>
                        <img src="https://www.fotor.com/blog/wp-content/uploads/2017/09/photo-composition-e1597393995467-797x1024.jpg" alt=""/>
                    </div>
                ))}
            </div>
            <div className={sl.posts}>
                {generateFakeData(10).map((item) => (
                    <div key={item} className={sl.posts_item}>
                        <div className={sl.posts_item_facts}>
                            <div className={sl.posts_item_fact}>
                                <FaHeart />
                                <span>
                                    12
                                </span>
                            </div>
                            <div className={sl.posts_item_fact}>
                                <FaComment/>
                                <span>
                                    12
                                </span>
                            </div>
                        </div>
                        <img src="https://www.fotor.com/blog/wp-content/uploads/2017/09/photo-composition-e1597393995467-797x1024.jpg" alt=""/>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Profile;