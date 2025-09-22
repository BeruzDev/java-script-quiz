import { Stack, Typography } from '@mui/material'
import { JavaScriptLogo } from './JavaScriptLogo'
import { GithubLogo } from './GithubLogo'

const Navbar = () => {
	return (
		<nav style={{ padding: '.2rem 1rem', backgroundColor: '#242424', position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}>
			<Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" gap={2} alignItems="center">
            <JavaScriptLogo />
            <Typography variant="h5" component="h1" sx={{ py: 2 }}>
              JavaScript Quiz
            </Typography>
          </Stack>

					<a href='https://github.com/BeruzDev/java-script-quiz'>
						<GithubLogo />
					</a>
        </Stack>
		</nav>
	)
}

export default Navbar
