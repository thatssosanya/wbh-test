import { useEffect } from "react"
import { useSelector } from "react-redux"

import { useRouter } from "next/router"

import AdvertTable from "@/components/AdvertPage/Adverts/AdvertTable"
import RegionSelector from "@/components/AdvertPage/Adverts/RegionSelector"
import SearchBar from "@/components/AdvertPage/SearchBar"
import Subjects from "@/components/AdvertPage/Subjects"
import DefaultLayout from "@/components/layouts/DefaultLayout"
import Box from "@/components/ui/Box"
import Grid from "@/components/ui/Grid"
import Stack from "@/components/ui/Stack"
import Text from "@/components/ui/Text"

import { useGetRegionsQuery } from "@/utils/redux/slices/wbApi"
import { AppState } from "@/utils/redux/store"

const Adverts = () => {
  const token = useSelector<AppState, string>((state) => state.user.token)
  const router = useRouter()
  useEffect(() => {
    if (!token) {
      router.push("/")
    }
  }, [token, router])

  const search = useSelector<AppState, string>((state) => state.advertPage.search)
  const { data: regions, isLoading } = useGetRegionsQuery()

  return (
    <DefaultLayout gap="20">
      <SearchBar />
      <Grid gap="20" templateColumns={!isLoading && search && regions?.length ? "60fr 40fr" : "1f 0fr"}>
        <Stack gap="20">
          <RegionSelector />
          <Text size="large" color="placeholder">
            Est ipsum gravida sit non. Mi ac habitasse proin sollicitudin malesuada blandit. Arcu turpis cursus
            imperdiet diam tincidunt augue ut. Metus proin vel consectetur ipsum quis amet faucibus mus. Placerat cras
            ac amet dictum. Massa sed cursus dapibus morbi turpis velit id mauris at.
          </Text>
          <AdvertTable />
        </Stack>
        <Box>
          <Subjects />
        </Box>
      </Grid>
    </DefaultLayout>
  )
}

export default Adverts
