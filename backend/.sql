CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password TEXT,
    username VARCHAR(30) NOT NULL UNIQUE,
    full_name VARCHAR(150) NOT NULL,
    avatar_url TEXT,
    bio TEXT,
    res_id UUID,
    is_verified BOOLEAN NOT NULL DEFAULT FALSE,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);




INSERT INTO users (
  id,
  email,
  password,
  username,
  full_name,
  avatar_url,
  bio,
  res_id,
  is_verified,
  created_at,
  updated_at
) VALUES
(
  gen_random_uuid(),
  'alex.mokoena@example.com',
  'hashedpassword1',
  'alexm',
  'Alex Mokoena',
  'https://example.com/avatars/alex.jpg',
  'Just a chill guy in res.',
  gen_random_uuid(),
  false,
  NOW(),
  NOW()
),
(
  gen_random_uuid(),
  'thando.sithole@example.com',
  'hashedpassword2',
  'thando_s',
  'Thando Sithole',
  'https://example.com/avatars/thando.jpg',
  'Student life vibes.',
  gen_random_uuid(),
  true,
  NOW(),
  NOW()
),
(
  gen_random_uuid(),
  'kabelo.ndlovu@example.com',
  'hashedpassword3',
  'kabelo_n',
  'Kabelo Ndlovu',
  NULL,
  'Building something big.',
  gen_random_uuid(),
  false,
  NOW(),
  NOW()
),
(
  gen_random_uuid(),
  'lerato.khumo@example.com',
  'hashedpassword4',
  'lerato_k',
  'Lerato Khumo',
  'https://example.com/avatars/lerato.jpg',
  NULL,
  gen_random_uuid(),
  true,
  NOW(),
  NOW()
),
(
  gen_random_uuid(),
  'sibusiso.dlamini@example.com',
  'hashedpassword5',
  'sbu_dev',
  'Sibusiso Dlamini',
  NULL,
  'Code. Sleep. Repeat.',
  gen_random_uuid(),
  false,
  NOW(),
  NOW()
);
