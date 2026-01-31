'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const EMAIL = process.env.NEXT_PUBLIC_EMAIL

const PrivacyPage = () => {
  return (
    <Container maxWidth="md" sx={{ pt: 12, pb: 8 }}>
      <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
        Privacy, Data Protection & Records Management Policy
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }}>
        Effective Date: January 2026
      </Typography>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        1. Purpose
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Brief Consulting (&#34;the Company&#34;) is a professional consulting firm committed to
        protecting personal information and managing all client and business records responsibly.
      </Typography>
      <Typography gutterBottom>
        This Policy explains, in clear terms, how the Company collects, uses, protects, and retains
        information in accordance with the Personal Information Protection and Electronic Documents
        Act (PIPEDA) and applicable Canadian laws.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        2. Information We Collect
      </Typography>
      <Typography sx={{ mb: 2 }}>
        The Company may collect or receive information for two main purposes:
      </Typography>
      <Box component="ul" sx={{ mb: 2, pl: 4 }}>
        <Typography component="li" gutterBottom>
          Client Information – Information we collect directly from our clients to manage our
          business relationship. This may include names, professional titles, organizational
          details, email addresses, billing and payment information, and communications relating to
          our work together.
        </Typography>
        <Typography component="li" gutterBottom>
          Information Handled on Behalf of Clients – Information we receive or collect in the course
          of performing consulting work for clients. This may include data supplied by clients
          (e.g., program data, contact lists, or reports) or information collected on a client’s
          behalf (e.g., through surveys, research, or stakeholder engagement).
        </Typography>
      </Box>
      <Typography gutterBottom>
        In both cases, the Company collects only what is necessary to perform the agreed-upon work
        or to meet legal and contractual obligations. We do not collect or retain unnecessary
        personal or sensitive information.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        3. How We Use Information
      </Typography>
      <Typography gutterBottom>Client Information is used to:</Typography>
      <Box component="ul" sx={{ mb: 2, pl: 4 }}>
        <Typography component="li" gutterBottom>
          Deliver consulting services;
        </Typography>
        <Typography component="li" gutterBottom>
          Communicate with clients and partners;
        </Typography>
        <Typography component="li" gutterBottom>
          Manage billing and payments; and
        </Typography>
        <Typography component="li" gutterBottom>
          Comply with legal, tax, or contractual obligations.
        </Typography>
      </Box>
      <Typography sx={{ mb: 2 }}>
        Information Handled on Behalf of Clients is used solely to perform the services described in
        our engagement. Such information remains the property of the client and is processed only
        according to their instructions.
      </Typography>
      <Typography gutterBottom>
        The Company does not sell, rent, or share personal information for marketing or other
        unrelated purposes.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        4. Data Storage and Protection
      </Typography>
      <Typography sx={{ mb: 2 }}>
        All records are stored securely in cloud-based systems, primarily Microsoft 365 and other
        encrypted, reputable services.
      </Typography>
      <Typography sx={{ mb: 2 }}>
        No business or client data are stored on local hard drives or portable media.
      </Typography>
      <Typography gutterBottom>
        Access is limited to authorized personnel, and all cloud accounts use multi-factor
        authentication (MFA) and encryption both in transit and at rest.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        5. Retention and Disposal
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Records and client files are kept for a minimum of seven (7) years after an engagement ends,
        or longer if required by law or contract.
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Financial and tax records are retained for at least six (6) years from the end of the last
        tax year to which they relate, per Canada Revenue Agency (CRA) requirements.
      </Typography>
      <Typography sx={{ mb: 2 }}>
        When information is no longer needed, it is securely deleted or destroyed.
      </Typography>
      <Typography gutterBottom>
        Minimal archival records may be retained longer when necessary for business or legal
        continuity.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        6. Access and Correction
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Individuals may request access to their personal information or ask for corrections if they
        believe it to be inaccurate or incomplete.
      </Typography>
      <Typography gutterBottom>
        Requests can be sent in writing to the Privacy Officer (see contact below). The Company will
        respond promptly and transparently.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        7. Data Breach Response
      </Typography>
      <Typography gutterBottom>If a data breach occurs, the Company will:</Typography>
      <Box component="ul" sx={{ mb: 2, pl: 4 }}>
        <Typography component="li" gutterBottom>
          Take immediate action to contain the issue;
        </Typography>
        <Typography component="li" gutterBottom>
          Assess the potential impact and risk; and
        </Typography>
        <Typography component="li" gutterBottom>
          Notify affected individuals and authorities as required by PIPEDA.
        </Typography>
      </Box>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        8. Policy Review
      </Typography>
      <Typography sx={{ mb: 2 }}>
        This Policy will be reviewed periodically to ensure it remains current and appropriate for
        the Company’s size, technology, and operations.
      </Typography>
      <Typography gutterBottom>
        Updated versions will be made available upon request or posted on the Company’s website.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        9. Contact Information
      </Typography>
      <Typography>Privacy Officer</Typography>
      <Typography>Brief Consulting</Typography>
      <Typography>
        Email: <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
      </Typography>
    </Container>
  )
}

export default PrivacyPage
