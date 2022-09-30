import React, { useState } from "react"
import Notelifylogo3 from "./Notelifylogo3"
import { Link, useHref } from "react-router-dom"
import { View, Icon, Flex, Text } from "@aws-amplify/ui-react"
import StickyNote2Icon from "@mui/icons-material/StickyNote2"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import ArchiveIcon from "@mui/icons-material/Archive"
import GroupsIcon from "@mui/icons-material/Groups"
import dp from "../images/dp.jpg"
import showcase from "../images/showcase.jpg"
import "../styles/header.css"
import { Logout } from "./Logout"
import { useGetUserQuery } from "../redux/services/user"

export const Header = () => {
  const token = localStorage.getItem("token")
  const { data, isSuccess } = useGetUserQuery(token)
  const [mobileNav, setMobileNav] = useState(false)
  const href = useHref()
  const dateObj = new Date()
  const date = dateObj.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return (
    <div>
      {/* Nav Section */}
      <View
        as="div"
        boxShadow="medium"
        className={`${mobileNav ? "main-header nav-active" : "main-header"}`}
      >
        <View as="div" marginLeft={"1.5rem"}>
          <Link to={"/"}>
            <Notelifylogo3 marginBottom={"2rem"} />
          </Link>
          <View
            as="div"
            margin="0.5rem 0 0.5rem -1rem"
            textAlign={"center"}
            fontFamily="monospace"
            fontSize="0.9rem"
            className="light-up"
          >
            <Text color="#1C1D21">Take Notes,</Text>
            <Text color="#1C1D21">Unleash your Ideas.</Text>
          </View>
        </View>

        <View as={"nav"} marginTop="2.5rem">
          <ul>
            <li className={href === "/notes" && "active-nav"}>
              <Link to="/notes">
                <Icon as={StickyNote2Icon} color="#A09ABC" /> All Notes
              </Link>
            </li>
            <li className={href === "/favourites" && "active-nav"}>
              <Link to="/favourites">
                <Icon as={FavoriteBorderIcon} color="#EF2D56" /> Favourites
              </Link>
            </li>
            <li className={href === "/collab-notes" && "active-nav"}>
              <Link to="/collab-notes">
                <Icon as={GroupsIcon} color="#258EA6" /> Collab Notes
              </Link>
            </li>
            <li className={href === "/notifications" && "active-nav"}>
              <Link to="/notifications">
                <Icon as={NotificationsNoneIcon} color="#2FBF71" /> Notifcations
              </Link>
            </li>
            <li className={href === "/archive" && "active-nav"}>
              <Link to="/archive">
                <Icon as={ArchiveIcon} color="#BABD8D" /> Archive
              </Link>
            </li>
            <li>
              {/* <Icon as={DarkModeIcon} color="#051922" /> Dark Mode */}
              <Logout />
            </li>
          </ul>
        </View>
      </View>

      {/* Showcase Section */}
      {href.indexOf(`notes/editor/`) === -1 && (
        <div className="top-header">
          <div className="showcase">
            <img src={showcase} alt="showcase" />
          </div>
          <Flex
            justifyContent={"space-between"}
            alignItems="center"
            marginTop={"2rem"}
          >
            <Text color={"#fff"}>
              <h2>
                Good{" "}
                {dateObj.getHours() < 12
                  ? "Morning"
                  : dateObj.getHours() < 18
                  ? "Afternoon"
                  : "Evening"}
                , {isSuccess && data.user.name}
              </h2>
              <p>
                <small>{date}</small>
              </p>
            </Text>

            <View
              className="user-icon"
              style={{
                marginRight: "1rem",
                display: "inline-block",
                color: "#fff",
              }}
              cursor="pointer"
            >
              <Flex
                justifyContent={"space-between"}
                gap="5px"
                alignItems="center"
                backgroundColor={"#565857"}
                padding="0.2rem 0.5rem"
                borderRadius={"large"}
                boxShadow={"large"}
              >
                <img
                  src={isSuccess && (data.user.avatarURL || dp)}
                  alt="User Avatar"
                  style={{
                    height: "2rem",
                    width: "2rem",
                    borderRadius: "100%",
                    display: "inline-block",
                    margin: "0",
                  }}
                />
                <span>{isSuccess && data.user.name}</span>
              </Flex>
            </View>
          </Flex>
        </div>
      )}

      <View className="header-mobile" boxShadow="small">
        <Flex justifyContent={"space-between"} alignItems="center">
          <Notelifylogo3 />

          <div
            className={`${mobileNav ? "ham ham-active" : "ham"}`}
            onClick={() => {
              if (mobileNav) setMobileNav(false)
              else setMobileNav(true)
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Flex>
      </View>
    </div>
  )
}
