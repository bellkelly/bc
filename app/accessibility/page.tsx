'use client'

import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const EMAIL = process.env.NEXT_PUBLIC_EMAIL

const PrivacyPage = () => {
  return (
    <Container maxWidth="md" sx={{ pt: 12, pb: 8 }}>
      <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
        Accessibility Policy
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }}>
        Effective Date: January 2026
      </Typography>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        1. Purpose
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Brief Consulting (&#34;the Company&#34;) is committed to providing services in a manner that
        is accessible, inclusive, and respectful of the dignity and independence of all individuals,
        including persons with disabilities. This Policy is aligned with the Accessibility for
        Ontarians with Disabilities Act, 2005 (AODA) and the Integrated Accessibility Standards
        Regulation (IASR).
      </Typography>
      <Typography gutterBottom>
        The purpose of this Policy is to outline how Brief Consulting will ensure accessibility in
        its communications, digital services, and professional interactions with clients, partners,
        and members of the public.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        2. Scope
      </Typography>
      <Typography gutterBottom>
        This Policy applies to all operations of Brief Consulting, including its consulting
        divisions, contractors, and affiliates. The Company operates primarily in a digital
        environment and does not maintain a public physical office location.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        3. Commitment to Accessibility
      </Typography>
      <Typography gutterBottom>
        Brief Consulting. is committed to ensuring that persons with disabilities can access
        information, documents, and services in a manner consistent with the principles of dignity,
        independence, integration, and equal opportunity.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        4. Communication and Digital Accessibility
      </Typography>
      <Typography gutterBottom>
        All written communication, including reports, presentations, and deliverables, will be
        provided in accessible digital formats upon request. The Company will make reasonable
        efforts to ensure that all electronic communications and websites meet recognized
        accessibility standards such as the Web Content Accessibility Guidelines (WCAG) 2.1, Level
        AA.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        5. Accessible Services and Deliverables
      </Typography>
      <Typography gutterBottom>
        Services are delivered primarily through email, videoconference (e.g., Microsoft Teams or
        Zoom), and other digital channels. Upon request, the Company will make reasonable
        accommodations to ensure materials and sessions are accessible to persons with disabilities.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        6. Feedback and Contact
      </Typography>
      <Typography gutterBottom>
        Clients, partners, and members of the public are encouraged to provide feedback about
        accessibility to help improve our practices. Feedback may be submitted by email to&nbsp;
        <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>. We will acknowledge all feedback and respond
        in a timely manner.
      </Typography>

      <Typography variant="h6" component="h2" sx={{ my: 2 }}>
        7. Policy Review
      </Typography>
      <Typography gutterBottom>
        This Policy will be reviewed at least once every three (3) years, or sooner if required by
        changes in legislation or business practices. Updated versions will be made available upon
        request or published on the Company’s website.
      </Typography>
    </Container>
  )
}

export default PrivacyPage
