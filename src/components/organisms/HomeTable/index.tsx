/** @packages */
import {Button, Link as LinkUi, Table, User } from "@nextui-org/react";
import Link from 'next/link'

/** @module */
import {headers, ShowType, shows} from "./helpers";

export const HomeTable = (): JSX.Element => {
  return (
    <Table
      css={{ minWidth: "80%", maxWidth: "100%", minHeight: '50vh', maxHeight: '70vh' }}
      selectionMode="single"
    >
      <Table.Header columns={headers}>
        <Table.Column align="start">Presenter</Table.Column>
        <Table.Column align="center">Price</Table.Column>
        <Table.Column align="center">Actions</Table.Column>
      </Table.Header>
      <Table.Body items={shows}>
        {(show: ShowType) => (
          <Table.Row key={`${show.id}`}>
            <Table.Cell>
              <User squared src={show.avatar} name={show.title} css={{ p: 0 }}>
                Presentation at {show.hour}
              </User>
            </Table.Cell>
            <Table.Cell css={{textAlign: "center"}}>${show.price} USD</Table.Cell>
            <Table.Cell css={{textAlign: "center", m: 'auto', minWidth: "fit-content"}}>
              <Button flat color="error" css={{m:'auto'}}>
                <Link href={`/shopping/${show.id}`}>
                  <LinkUi color="error">Buy now</LinkUi>
                </Link>
              </Button>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
