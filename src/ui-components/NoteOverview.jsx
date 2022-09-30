import React from "react"
import { View, Flex, Text, Heading, Icon, Card } from "@aws-amplify/ui-react"
import { Link, useHref } from "react-router-dom"
import EditIcon from "@mui/icons-material/Edit"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ArchiveIcon from "@mui/icons-material/Archive"
import DeleteIcon from "@mui/icons-material/Delete"
import { UnarchiveTwoTone } from "@mui/icons-material"
import {
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} from "../redux/services/user"
import { ToastContainer, toast } from "react-toastify"
import { InviteCollaborator } from "./InviteCollaborator"
import { useSerialize } from "../hooks/useSerialize"
import { useDateFormater } from "../hooks/useDateFormater"

export const NoteOverview = ({
  title,
  time,
  body,
  isFavourite,
  isArchived,
  id,
  collaborators,
  refetchNote,
  link,
}) => {
  const [updateNote] = useUpdateNoteMutation()
  const [deleteNote] = useDeleteNoteMutation()
  const token = localStorage.getItem("token")
  const dateObj = new Date(time)
  const { date, time_ } = useDateFormater(dateObj)

  const href = useHref()
  const serialize = useSerialize

  return (
    <Card padding={"1rem"} boxShadow="medium">
      <ToastContainer />
      <Link
        to={link ? `/${link}/editor/${id}` : `/notes/editor/${id}`}
        className="note"
      >
        <Flex justifyContent={"space-between"} alignItems="center">
          <Heading level={6} fontWeight={"medium"}>
            {title}
          </Heading>
          <Icon
            as={EditIcon}
            fontSize="1rem"
            opacity={"0.7"}
            style={{ cursor: "pointer" }}
          />
        </Flex>
        <View as="div" marginBottom="0.5rem" marginTop="0.2rem">
          <Text as="small" fontSize={"0.8rem"} opacity={"0.7"}>
            {`${date}, ${time_}`}
          </Text>
        </View>
        <Text as="p" fontSize={"0.85rem"}>
          {body !== undefined && serialize(JSON.parse(body)).slice(0, 120)}
          ....
        </Text>
      </Link>

      {href !== "/collab-notes" && (
        <View as="div" marginTop="1.5rem" className="note-icons">
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <div>
              <Icon
                as={FavoriteBorderIcon}
                fontSize="1.2rem"
                opacity={"0.7"}
                style={{ cursor: "pointer" }}
                color={isFavourite === true ? "#EF2D56" : "#000"}
                onClick={async () => {
                  try {
                    if (isFavourite === true) {
                      await updateNote({ favourite: false, token, id })
                    } else {
                      await updateNote({ favourite: true, token, id })
                    }
                    refetchNote()
                  } catch (error) {
                    console.log(error)
                  }
                }}
              />
              <InviteCollaborator noteID={id} collaborators={collaborators} />
            </div>
            <div>
              <Icon
                as={isArchived === false ? ArchiveIcon : UnarchiveTwoTone}
                fontSize="1.2rem"
                opacity={"0.7"}
                marginLeft="1rem"
                style={{ cursor: "pointer" }}
                onClick={async () => {
                  try {
                    if (isArchived === false) {
                      await updateNote({ archive: true, token, id })
                    } else {
                      await updateNote({ archive: false, token, id })
                    }
                    refetchNote()
                  } catch (error) {
                    console.log(error)
                  }
                }}
              />
              <Icon
                as={DeleteIcon}
                fontSize="1.2rem"
                opacity={"0.7"}
                marginLeft="1rem"
                style={{ cursor: "pointer" }}
                onClick={async () => {
                  try {
                    await deleteNote({ token, id }).unwrap()
                    refetchNote()
                    toast.warning("Note deleted", {
                      position: toast.POSITION.TOP_CENTER,
                    })
                  } catch (error) {
                    console.log(error)
                  }
                }}
              />
            </div>
          </Flex>
        </View>
      )}
    </Card>
  )
}
