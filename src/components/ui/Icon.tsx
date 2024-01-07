import Box from "@/components/ui/Box"

const Icon = ({ type, className }: { type: IconType; className?: string }) => {
  return <Box className={className}>{getIcon(type)}</Box>
}

const getIcon = (type: IconType) => {
  switch (type) {
    case "chevronDown": {
      return ChevronDown
    }
    case "search": {
      return Search
    }
  }
}

export type IconType = "chevronDown" | "search"

const ChevronDown = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 24" fill="none">
    <path d="M8 10.5L12 14.5L16 10.5" stroke="#777777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Search = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 24" fill="none">
    <path
      d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z"
      stroke="#777777"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.0004 21.5L16.6504 17.15"
      stroke="#777777"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Icon
