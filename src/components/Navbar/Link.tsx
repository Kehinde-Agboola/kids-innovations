import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: string,
    setSelectedPage: (value: string ) => void;
}

const Link = ({ page, selectedPage, setSelectedPage

 }: Props) => {
   const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "")
  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage} ? "text-blue-500 : ""
    transition duration-500 hover:text-blue-500
}`}
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link