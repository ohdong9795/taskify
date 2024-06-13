import { getInvitations } from '@/services/server/invitations';
import { InvitationData } from '@/types/user/dashboard';
import InvitedDashboards from './InvitedDashboards';

async function InviteField() {
  const invitationData: InvitationData = await getInvitations({});

  return <InvitedDashboards invitationData={invitationData} />;
}

export default InviteField;
