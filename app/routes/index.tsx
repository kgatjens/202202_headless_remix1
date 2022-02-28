
import { useLoaderData, json, Link, Links } from "remix"
import {gql} from 'graphql-request'
import { client } from "~/lib/graphql-client";

const GetMainNav = gql`
query General {
  mainFooter: menu(id: "dGVybToyMDE=") {
    count
    id
    databaseId
    menuItems {
      nodes {
        id
        databaseId
        title
        url
        cssClasses
        description
        label
        target
      }
    }
  }
  mainNav: menu(id: "dGVybToxOTk=") {
    count
    id
    databaseId
    menuItems {
      nodes {
        id
        databaseId
        title
        url
        cssClasses
        description
        label
        target
      }
    }
  }

}

`;

export let loader = async () => {
  const {mainNav} = await client.request(GetMainNav);

  return json({mainNav});
};

export default function Index() {

  let data = useLoaderData();

  return (
    <div >
       <div className="">
          <ul className="">
          {  data.mainNav.menuItems.nodes.map( nodes => (
                  <li className="" key={ nodes.id }>
                  <Link  to="{ nodes.url }">{nodes.label}</Link>
                  </li>
              ) )  }      
          </ul>
        </div>
      
      
      <pre>{JSON.stringify(data.mainNav.menuItems.nodes, null, 2)}</pre>
    </div>
  );
}
