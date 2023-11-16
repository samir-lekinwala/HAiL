export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('locations').del()

  // Inserts seed entries
  await knex('locations').insert([
    {
      city: 'Auckland',
      country: 'New Zealand',
      latitude: -36.86,
      longitude: 174.54,
      imageURL:
        'https://a.cdn-hotels.com/gdcs/production133/d294/4e4195aa-b9ca-42cd-923f-e8a65c8c5c7b.jpg',
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      latitude: 35.69,
      longitude: 139.69,
      imageURL:
        'https://www.gotokyo.org/en/destinations/western-tokyo/shibuya/images/main.jpg',
    },
    {
      city: 'New York',
      country: 'America',
      latitude: 40.69,
      longitude: -73.92,
      imageURL:
        'https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2991,h_1682,c_limit/GettyImages-946087016.jpg',
    },
    {
      city: 'London',
      country: 'United Kingdom',
      latitude: 51.51,
      longitude: -0.13,
      imageURL: 'https://media.timeout.com/images/106049585/image.jpg',
    },
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      latitude: 25.2,
      longitude: 55.27,
      imageURL:
        'https://static.independent.co.uk/2023/07/04/09/iStock-1193239486.jpg',
    },
    {
      city: 'Montreal',
      country: 'Canada',
      latitude: 45.56,
      longitude: -73.88,
      imageURL:
        'https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx',
    },
    {
      city: 'Station Nord',
      country: 'Greenland',
      latitude: 81.6,
      longitude: -16.67,
      imageURL:
        'https://blogs.esa.int/campaignearth/files/2017/03/DSC_0303-1024x683.jpg',
    },
    {
      city: 'Sydney',
      country: 'Australia',
      latitude: -33.85,
      longitude: 150.6,
      imageURL:
        'https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg',
    },
    {
      city: 'Manila',
      country: 'Philippines',
      latitude: 14.6,
      longitude: 120.94,
      imageURL:
        'https://static.ffx.io/images/$zoom_1%2C$multiply_0.3119%2C$ratio_1.777778%2C$width_1988%2C$x_12%2C$y_48/t_crop_custom/q_86%2Cf_auto/7aa9fcef2fcf1157fe8c94e79d6fe7b7ea81eadd',
    },
    {
      city: 'Delhi',
      country: 'India',
      latitude: 28.64,
      longitude: 76.93,
      imageURL:
        'https://www.travelandleisure.com/thmb/iAIrOVW7yWrDG8pZBpKMOvEGuNQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-delhi-india-NEWDELHITG0721-60d592e1603349298a0206d67d08582b.jpg',
    },
    {
      city: 'Paris',
      country: 'France',
      latitude: 48.86,
      longitude: 2.26,
      imageURL:
        'https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg',
    },
    {
      city: 'Casablanca',
      country: 'Morocco',
      latitude: 33.57,
      longitude: -7.67,
      imageURL:
        'https://www.tripsavvy.com/thmb/Ele8VRskHfVMNkFJDohpE422JqQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-84288050-8c2e8442ebcc4d1ba50214f0b1ed4b8d.jpg',
    },
  ])
}
