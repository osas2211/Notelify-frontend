import React from "react"
import { View, Heading, Grid } from "@aws-amplify/ui-react"
import { NoteOverview } from "../ui-components/NoteOverview"
import { useGetCollabNotesQuery } from "../redux/services/user"

export const CollabNotes = () => {
  const token = localStorage.getItem("token")
  const { data, isSuccess, refetch } = useGetCollabNotesQuery(token)
  return (
    <View as="div">
      <Heading level={5} margin="2rem 0 1rem 0" fontWeight={"medium"}>
        Collab Notes
      </Heading>
      <Grid templateColumns={{ base: "1fr", large: "1fr 1fr 1fr" }} gap="1rem">
        {isSuccess &&
          data.notes.map((note) => (
            <NoteOverview
              id={note._id}
              body={note.textContent}
              title={note.label}
              isArchived={note.archive}
              refetchNote={refetch}
              time={note.last_edited}
              collaborators={note.collaborators}
              link={"collab-notes"}
            />
          ))}
      </Grid>
    </View>
  )
}
