import React from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import { Table } from "flowbite-react";

function History() {
  const directors = [
    {
      id: 1,
      name: "Dr. Jahirul Islam",
      from: "1 Feb 2019",
      to: "Present",
    },
    {
      id: 1,
      name: "Dr. Jahirul Islam",
      from: "1 Feb 2019",
      to: "Present",
    },
    {
      id: 1,
      name: "Dr. Jahirul Islam",
      from: "1 Feb 2019",
      to: "Present",
    },
    {
      id: 1,
      name: "Dr. Jahirul Islam",
      from: "1 Feb 2019",
      to: "Present",
    },
    {
      id: 1,
      name: "Dr. Jahirul Islam",
      from: "1 Feb 2019",
      to: "Present",
    },
    {
      id: 1,
      name: "Dr. Jahirul Islam",
      from: "1 Feb 2019",
      to: "Present",
    },
  ];
  return (
    <Layout>
      <section className="max-w-screen-2xl m-auto">
        <HeadingBar name=" History" />
        <div className="m-10 ">
          Occaecat tempor voluptate cillum voluptate veniam voluptate minim
          velit adipisicing. Mollit est fugiat officia reprehenderit dolore ea
          id sint ex cillum adipisicing. Qui amet ipsum labore amet.Sint aliquip
          aliquip in elit quis commodo consequat consectetur incididunt. Qui qui
          dolor Lorem elit elit in officia. Culpa velit consequat sit sit Lorem
          nisi eu ullamco dolore laborum. Minim Lorem labore voluptate do ex
          proident adipisicing dolor laboris aliqua deserunt anim. Occaecat ex
          cupidatat sint consequat ad nulla nulla veniam occaecat culpa sunt
          aliquip exercitation officia.
        </div>
        <div className="m-10">
          Occaecat tempor voluptate cillum voluptate veniam voluptate minim
          velit adipisicing. Mollit est fugiat officia reprehenderit dolore ea
          id sint ex cillum adipisicing. Qui amet ipsum labore amet.Sint aliquip
          aliquip in elit quis commodo consequat consectetur incididunt. Qui qui
          dolor Lorem elit elit in officia. Culpa velit consequat sit sit Lorem
          nisi eu ullamco dolore laborum. Minim Lorem labore voluptate do ex
          proident adipisicing dolor laboris aliqua deserunt anim. Occaecat ex
          cupidatat sint consequat ad nulla nulla veniam occaecat culpa sunt
          aliquip exercitation officia.
        </div>
        <HeadingBar name=" Roll of Honor" />
        <Table striped={true} className="mt-10 ">
          <Table.Head className="bg-rose-800 text-white">
            <Table.HeadCell>Director&apos;s Name</Table.HeadCell>
            <Table.HeadCell>From</Table.HeadCell>
            <Table.HeadCell>To</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {directors.map((director) => (
              <Table.Row
                className="bg-white dark:border-rose-700 dark:bg-gray-800"
                key={director.id}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {director.name}
                </Table.Cell>
                <Table.Cell className="text-gray-800">
                  {director.from}
                </Table.Cell>
                <Table.Cell className="text-gray-800">{director.to}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </section>
    </Layout>
  );
}

export default History;
