export interface Permission {
  id: string;
  name: string;
  description: string;
  type: 'read' | 'write' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPermission {
  id: string;
  userId: string;
  permissionId: string;
  permission: Permission;
  user: {
    id: string;
    name: string;
    email: string;
  };
}
