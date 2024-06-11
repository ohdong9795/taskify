import { Invitation } from '@/types/user/dashboard';

function InvitedTable({ invitations }: { invitations: Invitation[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>초대자</th>
          <th>수락 여부</th>
        </tr>
      </thead>
      <tbody>
        {invitations.map(({ inviter, id, dashboard }) => (
          <tr key={id}>
            <th>{dashboard.title}</th>
            <th>{inviter.nickname}</th>
            <th>
              <button type="submit">수락</button>
              <button type="submit">거절</button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InvitedTable;
